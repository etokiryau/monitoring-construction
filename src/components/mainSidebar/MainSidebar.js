import { useState, useContext, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';

import { AuthContext } from '../auth/AuthProvider';

import instagramLogo from '../footer/img/instagramLogo.png';
import facebookLogo from '../footer/img/facebookLogo.png';
import linkedinLogo from '../footer/img/linkedinLogo.png';

import './mainSidebar.scss';

const MainSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }


    useEffect(() => {
        document.body.style.overflow = isSidebarOpen ? "hidden" : "visible";
    }, [isSidebarOpen]);


    const { user } = useContext(AuthContext);
    let pathname = user ? '/project' : '/login';

    return (
        <aside id="main">
            <div onClick={toggleSidebar} className={isSidebarOpen ? "aside__burger active" : "aside__burger"}>
                <span></span>
                <span></span>
                <span></span>
            </div>  
            
            <div onClick={toggleSidebar} style={{display: isSidebarOpen ? '' : 'none'}} className="aside__wrapper"/>

            <div className="aside__content" style={{top: isSidebarOpen ? '0px' : '-100%'}}>
                    <ul >
                        <li onClick={toggleSidebar}><NavLink className={({isActive}) => isActive ? 'active' : ''} to='/'>Home</NavLink></li>
                        <li onClick={toggleSidebar}><NavLink to='/projects'>Projects</NavLink></li>
                        <li onClick={toggleSidebar}><NavLink to='/advantages'>Advantages</NavLink></li>
                        <li onClick={toggleSidebar}><NavLink to='/questions'>FAQ</NavLink></li>
                        <li onClick={toggleSidebar}><NavLink to='/career'>Career</NavLink></li>
                        <li onClick={toggleSidebar}><NavLink to='/contacts'>Contacts</NavLink></li>
                    </ul>

                    <div className="aside__content-beneath">
                        <div className="aside__content-beneath-media">
                            <a href=""><img src={instagramLogo} alt="instagram" /></a>
                            <a href=""><img src={facebookLogo} alt="facebook" /></a>
                            <a href=""><img src={linkedinLogo} alt="linkedin" /></a>
                        </div>
                        <Link to="/login">Login</Link>
                        <p>En</p>
                    </div>
         
                    
                </div>
            
        </aside>
    )
}

export default MainSidebar;