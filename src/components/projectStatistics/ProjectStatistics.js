import { useRef } from 'react';

import materialChart from './img/materialChart.png';
import planFactChart from './img/planFactChart.png';
import calendar from './img/calendar.png';
import render1 from './img/render1.png';
import render2 from './img/render2.png';
import render3 from './img/render3.png';

import './projectStatistics.scss';

const ProjectStatistics = () => {

    const windowrRef = useRef(window);
    const windowWidth = windowrRef.current.innerWidth;
    
    return (
        <>
            <div className="project__statistics-wrapper-external">
                <p className="project__statistics">Project statistics</p>
                <div className="project__statistics-wrapper">
                    <div className="project__statistics-end-date">
                        <p name="head">PLANNED END DATE</p>
                        <div className="project__statistics-end-date-inner">
                            <div>
                                <img src={calendar} alt="calendar" />
                            </div>
                            <p name="date">20.01.2022</p>
                        </div>
                    </div>
                    <div className="project__statistics-material-volume">
                        <p name="head">MATERIAL VOLUME</p>
                        <div>
                            <img src={materialChart} alt="material-chart" />
                        </div>
                    </div>
                    <div className="project__statistics-fact">
                        <p name="head">FACT</p>
                        <div className="project__statistics-fact-wrapper">
                            <div className="project__statistics-fact-ring">
                                <svg>
                                    <circle cx="50%" cy="50%" r="60"/>
                                    <circle cx="50%" cy="50%" r="60"
                                        strokeDashoffset={windowWidth > 800 ? 'calc(377 - (377 * 35) / 100)' : 'calc(251 - (251 * 35) / 100)'}/>
                                </svg>
                                <p name="progress">35%</p>
                            </div>
                        </div>
                    </div>
                    <div className="project__statistics-plan-fact">
                        <p name="head">PLAN/FACT</p>
                        <div>
                            <img src={planFactChart} alt="plan-fact-chart" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="project__statistics-renders">
                <img src={render1} alt="render" />
                <img src={render2} alt="render" />
                <img src={render3} alt="render" />
            </div>
        </>
  
    )
}

export default ProjectStatistics;