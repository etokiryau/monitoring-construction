import GoogleMapService from '../../services/GoogleMapService';
import cloud from './img/cloud.png';
import rainCloud from './img/rainCloud.png';

import './projectWeatherCondition.scss';

const ProjectWeatherCondition = () => {

    const notificationData = [
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        },
        {
            number: '1',
            noteText: 'Mounting in bad weather',
            date: '20.01.2023'
        }
    ];

    const notificationContent = notificationData.map((item, i) => {
        return (
            <div key={i} className="account__weather-wrapper-notification-single">
                <div>
                    <div name="number"></div>
                    <p>{item.number}</p>
                </div>
                <p>{item.noteText}</p>
                <p>{item.date}</p>
            </div>
        )
    })

    return (
        
        <div className="account__weather">
        <div className="account__weather-wrapper-card">
            <p name="head">Project Address</p>
            <GoogleMapService/>
            <p name="address">London Rd, Patcham, Brighton BN1 8YQ, United Kingdom</p>
        </div>

        <div className="account__weather-wrapper-card">
            <p name="head">Weather</p>
            <div className="account__weather-forecast">
                <div className="account__weather-forecast-current">
                    <p name="curTemp">20°</p>
                    <img src={cloud} alt="cloud" />
                </div>
                <p name="condition">Overcast</p>
                <div className="account__weather-forecast-future">
                    <div className="account__weather-forecast-future-single">
                        <div>
                            <p>Wed</p>
                            <p>24°</p>
                        </div>
                        <img src={rainCloud} alt="rainCloud" />
                    </div>

                    <div className="account__weather-forecast-future-single">
                        <div>
                            <p>Thu</p>
                            <p>21°</p>
                        </div>
                        <img src={rainCloud} alt="rainCloud" />
                    </div>

                    <div className="account__weather-forecast-future-single">
                        <div>
                            <p>Fri</p>
                            <p>22°</p>
                        </div>
                        <img src={rainCloud} alt="rainCloud" />
                    </div>

                    <div className="account__weather-forecast-future-single">
                        <div>
                            <p>Sat</p>
                            <p>21°</p>
                        </div>
                        <img src={rainCloud} alt="rainCloud" />
                    </div>

                </div>
            </div>
        </div>
        
        <div className="account__weather-wrapper-card">
            <p name="head">Notification</p>
            <div className="account__weather-wrapper-notification-head">
                <p>№</p>
                <p>Description</p>
                <p>Due date</p>
            </div>
            <div className="account__weather-wrapper-notification">
                {notificationContent}
            </div>
        </div>
    
    </div>

    )
}

export default ProjectWeatherCondition;