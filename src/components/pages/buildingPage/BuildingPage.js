import { useState, useRef, useEffect, useCallback, lazy } from 'react';

import { useAutodeskPlatformService } from '../../../services/AutodeskPlatformService';
import Monitoring from '../../monitoring/Monitoring';
import { Context } from '../../../utilis/Context';

import './buildingPage.scss';

const TaskCard = lazy(() => import("../../taskCard/TaskCard"));

const Building = () => {
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visibleElements, setVisibleElements] = useState('');

    const taskModalRef = useRef(null);
    const windowRef = useRef(window);
    const viewerContainer = useRef(null);

    const {renderViewer, isolateElements, resetIsolation} = useAutodeskPlatformService();

    // const modelUrn = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dHN3aWdsenZ5dWJtbTZwaG04d2Ria2IzZHhqbmZrcnYtcHJvamVjdF9hL3Byb2plY3RfYV9mcmVlLm53ZA';
    const modelUrn = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dGVzdF9wbGF0Zm9ybS90ZXN0MDEuemlw';

    const toggleTaskModal = () => {
      setIsTaskModalOpen(!isTaskModalOpen);
    }

    const updateVisibleElements = useCallback((e) => {
      if (!isTaskModalOpen) {
        const data = e.target.getAttribute('data-elements');
        setVisibleElements(data);
        resetIsolation();
        isolateElements(data);
      } else {
        resetIsolation();
      }
    }, [isTaskModalOpen])

    const handleMouseDown = (event) => {
        const initialX = event.clientX - position.x;
        const initialY = event.clientY - position.y;
        
        document.body.style.userSelect = 'none';
    
        const handleMouseMove = (event) => {
            let newX = event.clientX - initialX;
            let newY = event.clientY - initialY;
            let rightModalShift = windowRef.current.innerWidth > 800 ? 60 : 0;
      
            if (newX < 0) {
              newX = 0;
            } else if (newX + taskModalRef.current.offsetWidth + taskModalRef.current.firstChild.clientWidth + 60 > windowRef.current.innerWidth) {
              newX = windowRef.current.innerWidth - taskModalRef.current.offsetWidth - taskModalRef.current.firstChild.clientWidth - rightModalShift - 10;
            }
      
            if (newY < 0) {
              newY = 0;
            } else if (newY + taskModalRef.current.offsetHeight + taskModalRef.current.firstChild.clientHeight > windowRef.current.innerHeight) {
              newY = windowRef.current.innerHeight - taskModalRef.current.offsetHeight - taskModalRef.current.firstChild.clientHeight;
            }
      
            setPosition({ x: newX, y: newY });
        };
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.body.style.userSelect = '';
        });
    };

    useEffect(() => {renderViewer(modelUrn, viewerContainer)}, [modelUrn]);
 
    return (
      <Context.Provider value={{visibleElements, modelUrn}}>
        <div style={{position: 'relative'}}>
          <Monitoring toggleTaskModal={(e) => {toggleTaskModal(); updateVisibleElements(e)}} updateVisibleElements={updateVisibleElements}/>
          
          <div ref={taskModalRef}
                style={{display: isTaskModalOpen ? 'block' : 'none', 
                        left: position.x,
                        top: position.y, 
                        }}
                className="taskcard-wrapper"
                onMouseDown={handleMouseDown}>
              <TaskCard toggleTaskModal={(e) => {toggleTaskModal(); updateVisibleElements(e)}}/>
          </div>

          <div className='viewer'>
            <div className='viewer-container' ref={viewerContainer} />
          </div>
        </div> 
      </Context.Provider>
    )
}

export default Building;