import { useMemo, useRef, useContext } from 'react';

import { Context } from '../../utilis/Context';

import calendarStart from './img/calendarStart.svg';
import calendarEnd from './img/calendarEnd.svg';
import alarm from './img/alarm.svg';

import './taskOverview.scss';

const TaskOverview = () => {

    const forge = useContext(Context);
    
    return (
        <div className="overview">
            <div className="overview__info">
                <div className="overview__info-part">
                    <p>Status</p>
                    <div className="overview__info-part-status">In progress</div>
                </div>
                <div style={{borderBottom: 'solid thin #DEDEDE'}}></div>
                <div className="overview__info-part">
                    <p>Value</p>
                    <div className="overview__info-part-value">30m3</div>
                </div>
                <div style={{borderBottom: 'solid thin #DEDEDE'}}></div>
                <div className="overview__info-part">
                    <p>Start date</p>
                    <div className="overview__info-part-date">
                        <img src={calendarStart} alt="calendar" />
                        <p>Apr 12, 2023</p>
                    </div>
                </div>
                <div style={{borderBottom: 'solid thin #DEDEDE'}}></div>
                <div className="overview__info-part">
                    <p>Expiration date</p>
                    <div className="overview__info-part-date">
                        <img src={calendarEnd} alt="calendar" />
                        <p>Dec 03, 2024</p>
                    </div>
                </div>
            </div>

            <div className="overview__alarm">
                <img src={alarm} alt="alarm" />
                <p>Brick laying is carried out in weather that does not correspond to the installation technology</p>
            </div>

            <div className="overview__model">
                <div style={{width: '100%', height: '100px'}} >
                    {/* {forge} */}
                </div>
            </div>
        </div>
    )
}

export default TaskOverview;