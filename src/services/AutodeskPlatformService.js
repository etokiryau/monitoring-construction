import { useState, useEffect, useCallback, useRef } from 'react';

import { useHttpAps } from '../hooks/http.aps.hook';

const AutodeskPlatformService = ({ modelUrn }) => {

    const [accessToken, setToken] = useState('');
    const viewerContainer = useRef(null);

    const Autodesk = window.Autodesk;

    const {getToken} = useHttpAps();

    const getAccessToken = useCallback(getToken(), []);
    getAccessToken.then((data) => setToken(data));

    const renderViewer = () => {
        let viewer;

        const options = {
            env: 'AutodeskProduction', 
            api: 'derivativeV2',
            locale: 'en-US',
            language: 'en',
            accessToken: accessToken,
        }

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
    }
    
    useEffect(() => {
        renderViewer();
    }, [accessToken]);

    return (
        <div ref={viewerContainer}></div>
    )
}

export default AutodeskPlatformService;