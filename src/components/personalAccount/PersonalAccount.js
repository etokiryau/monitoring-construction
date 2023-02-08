import { useState, useEffect, useRef} from 'react';

import GoogleMapService from '../../services/GoogleMapService';

import icon from './img/user.png';
import close from './img/close.png';
import render1 from './img/render1.png';
import render2 from './img/render2.png';
import render3 from './img/render3.png';
import cloud from './img/cloud.png';
import rainCloud from './img/rainCloud.png';
import materialChart from './img/materialChart.png';
import planFactChart from './img/planFactChart.png';
import calendar from './img/calendar.png';

import './personalAccount.scss';

const PersonalAccount = ({onChangeLoginStatus}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

    const modalRef = useRef(null);
    const editProfileRef = useRef(null);
    const windowrRef = useRef(window);
    const windowWidth = windowrRef.current.innerWidth;

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

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const toggleEditProfile = () => {
        setIsEditProfileOpen(!isEditProfileOpen);
        setIsModalOpen(false);
    }

    useEffect(() => {
        document.body.style.overflow = isEditProfileOpen ? "hidden" : "visible";
    }, [isEditProfileOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [modalRef]);

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
        <div className="account">

            <div ref={modalRef} className="account__profile">
                <img onClick={() => toggleModal()} src={icon} alt="account icon" />
                <div style={{'display': isModalOpen ? 'flex' : 'none'}} className="account__profile-modal">
                    <div>
                        <p className="account__profile-modal-name">Mikhail</p>
                        <p>(pirogovmihail.a@gmail.com)</p>
                    </div>
                    <div>
                        <p onClick={toggleEditProfile} className="account__profile-modal-link">Edit profile</p>
                        <p className="account__profile-modal-link" onClick={onChangeLoginStatus}>Log out</p>
                    </div>
                    <div style={{borderBottom: 'thin solid #828282'}}></div>
                    <div>
                        <p>PROJECTS</p>
                    </div>
                    <div>
                        <ul>
                            <li className="account__profile-modal-link">Project a</li>
                            <li className="account__profile-modal-link">Project b</li>
                            <li className="account__profile-modal-link">Project c</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div style={{display: isEditProfileOpen ? 'flex' : 'none'}} className="account__editprofile-wrapper">
                <div ref={editProfileRef} className="account__editprofile">
                    <img onClick={toggleEditProfile} className="account__editprofile-closebtn" src={close} alt="close" />
                    <h2 className="account__editprofile-head">Profile</h2>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                    <p>Picture</p>
                    <button name="image" type="button">Upload Image</button>
                    <p>Language</p>
                    <div className="account__editprofile-form">
                        <div className="account__editprofile-form-select">
                            <select name="language" id="account__editprofile-language">
                                <option value="english">English</option>
                                <option value="russian">Russian</option>
                                <option value="spanish">Spanish</option>
                            </select>
                        </div>
                    </div>
                    <p className="account__editprofile-changepass">Change password</p>
                    <div className="account__editprofile-result">
                        <button onClick={toggleEditProfile} name="result" type="button">Cancel</button>
                        <button name="result" type="button">Save</button>
                    </div>
                </div>
            </div>


            <div className="account__wrapper">
                <p className="account__head">Your personal account</p>
                <p className="account__project-code">SKU: 100.951.116</p>
                <div className="account__weather">
                    <div className="account__weather-wrapper-card">
                        <p name="head">Project Address</p>
                        <GoogleMapService/>
                        <p name="address">address</p>
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

                <div className="account__statistics-wrapper-external">
                    <p className="account__statistics">Project statistics</p>
                    <div className="account__statistics-wrapper">
                        <div className="account__statistics-end-date">
                            <p name="head">PLANNED END DATE</p>
                            <div className="account__statistics-end-date-inner">
                                <div>
                                    <img src={calendar} alt="calendar" />
                                </div>
                                <p name="date">20.01.2022</p>
                            </div>
                        </div>
                        <div className="account__statistics-material-volume">
                            <p name="head">MATERIAL VOLUME</p>
                            <div>
                                <img src={materialChart} alt="material-chart" />
                            </div>
                        </div>
                        <div className="account__statistics-fact">
                            <p name="head">FACT</p>
                            <div className="account__statistics-fact-wrapper">
                                <div className="account__statistics-fact-ring">
                                    <svg>
                                        <circle cx="50%" cy="50%" r="60"/>
                                        <circle cx="50%" cy="50%" r="60"
                                            strokeDashoffset={windowWidth > 800 ? 'calc(377 - (377 * 35) / 100)' : 'calc(251 - (251 * 35) / 100)'}/>
                                    </svg>
                                    <p name="progress">35%</p>
                                </div>
                            </div>
                        </div>
                        <div className="account__statistics-plan-fact">
                            <p name="head">PLAN/FACT</p>
                            <div>
                                <img src={planFactChart} alt="plan-fact-chart" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="account__statistics-renders">
                <img src={render1} alt="render" />
                <img src={render2} alt="render" />
                <img src={render3} alt="render" />
            </div>
        </div>
    )
}

export default PersonalAccount;