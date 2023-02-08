import { useState, useRef } from 'react';

import AutodeskPlatformService from '../../../services/AutodeskPlatformService';
import Monitoring from '../../monitoring/Monitoring';
import TaskCard from '../../taskCard/TaskCard';

import './building.scss';


const Building = () => {
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const taskModalRef = useRef(null);
    const windowRef = useRef(window);

    const urn = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cHJvamVjdF9hX2J5L3Byb2plY3RfYV9wcy56aXA';
    const apiKey = 'tSWiGLZVyUbMm6phm8wDBkb3dxjNFkRvbCziZvYLmADMdmWd';

    const toggleTaskModal = () => {
        setIsTaskModalOpen(!isTaskModalOpen)
    }

    const handleMouseDown = (event) => {
        const initialX = event.clientX - position.x;
        const initialY = event.clientY - position.y;
        
        document.body.style.userSelect = 'none';
    
        const handleMouseMove = (event) => {
            let newX = event.clientX - initialX;
            let newY = event.clientY - initialY;
      
            if (newX < 0) {
              newX = 0;
            } else if (newX + taskModalRef.current.offsetWidth + taskModalRef.current.firstChild.clientWidth + 60 > windowRef.current.innerWidth) {
              newX = windowRef.current.innerWidth - taskModalRef.current.offsetWidth - taskModalRef.current.firstChild.clientWidth - 60;
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

    return (
        <div style={{position: 'relative'}}>
            <Monitoring toggleTaskModal={toggleTaskModal}/>

            <div ref={taskModalRef}
                  style={{display: isTaskModalOpen ? 'block' : 'none', 
                          left: position.x,
                          top: position.y, 
                          position: 'absolute'}}
                  className="taskcard-wrapper"
                  onMouseDown={handleMouseDown}>
                <TaskCard toggleTaskModal={toggleTaskModal}/>
            </div>
            
            {/* <AutodeskPlatformService urn={urn} apiKey={apiKey}/> */}
        </div> 
    )
}

export default Building;