import { useCallback, useRef } from 'react';

import { useHttpAps } from '../hooks/http.aps.hook';

export const useAutodeskPlatformService = () => {
    const Autodesk = window.Autodesk;
    const THREE = window.THREE;
    const windowRef = useRef(window);

    const { getToken } = useHttpAps();

    let viewer;

    const renderViewer = async (modelUrn, viewerContainer) => {
        const accessToken = await getToken();

        const options = {
            env: 'AutodeskProduction', 
            api: 'derivativeV2',
            locale: 'en-US',
            language: 'en',
            accessToken: accessToken,
        };

        Autodesk.Viewing.Initializer(options, () => {
            viewer = new Autodesk.Viewing.GuiViewer3D(viewerContainer.current);

            let startedCode = viewer.start();

            if (startedCode > 0) {
                console.error('Failed to create a Viewer: WebGL not supported.');
                return;
            }           
        });

        Autodesk.Viewing.Document.load(
            `urn:${modelUrn}`,
            (doc) => {
                const defaultModel = doc.getRoot().getDefaultGeometry();
                viewer.loadDocumentNode(doc, defaultModel);
                viewer.setTheme("light-theme");
                viewer.setLightPreset(8);
                
            },
            (error) => {
                console.error(error);
            },
            { accessToken }
        );  

        return <div ref={viewerContainer} />
    }
    
    const isolateElements = useCallback(async (data) => {
        const arrayFromData = data.split(',');
        const getForgeIds = async () => {
            const forgeIdsArray = [];

            for (let i = 0; i < arrayFromData.length; i++) {
                const forgeId = await new Promise(resolve => {
                    viewer.search(arrayFromData[i], 
                        (dbIds) => {
                            resolve(dbIds);
                        }, 
                    () => {})
                })
            
                forgeIdsArray.push(forgeId[0]);
            }

            return forgeIdsArray;
        }

        const forgeIdsArray = await getForgeIds();       

        viewer.isolate(forgeIdsArray);
        viewer.setGhosting(true);
        viewer.fitToView();
    }, []);

    const resetIsolation = useCallback(() => {
        viewer.isolate();
        viewer.fitToView();
    }, []);

    const resetToolbarVisibility = useCallback(() => {
        viewer.toolbar.setVisible(false);
    }, []);

    const getProperties = useCallback(async() => {
        const selectedElement = viewer.getSelection()[0];
        const propertyValue = viewer.getProperties(selectedElement, function(result) {
            console.log(result);
        });
        // const propertyDb = viewer.model.getPropertyDb();
        // const elementProperties = await viewer.getProperties(propertyDb.cbId);
        // console.log(elementProperties)
    }, [])

    return {viewer, renderViewer, isolateElements, resetIsolation, resetToolbarVisibility, getProperties};
}

        // const modelInstances = viewer.getVisibleModels();
        // const modelInstance = modelInstances[0];
        // const color = new THREE.Vector4( 255 / 255, 0, 0, 1 );
        // viewer.setThemingColor([3593], color );
        // viewer.isolate(3593)
        // viewer.impl.selector.setAggregateSelection(selection);

// viewer.registerContextMenuCallback(  'MyChangingColorMenuItems', ( menu, status ) => {
        //     if( status.hasSelected ) {
        //         menu.push({
        //             title: 'Override color of selected elements to the red',
        //             target: () => {
        //                 const selSet = viewer.getSelection();
        //                 viewer.clearSelection();
        
        //                 const color = new THREE.Vector4( 255 / 255, 0, 0, 1 );
        //                 for( let i = 0; i < selSet.length; i++ ) {
        //                     viewer.setThemingColor( selSet[i], color );
        //                 }
        //             }
        //         });
        //     } else {
        //         menu.push({
        //             title: 'Clear overridden color',
        //             target: () => {
        //                 viewer.clearThemingColors();
        //             }
        //         });
        //     }
        // });