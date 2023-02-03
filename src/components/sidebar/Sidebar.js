import { NavLink, Link } from 'react-router-dom';

import project from './img/project.png';
import documentation from './img/documentation.png';
import building from './img/building.png';
import smartHouse from './img/smartHouse.png';
import support from './img/support.png';
import suportAbs from './img/supportAbs.svg';

import './sidebar.scss';

const Sidebar = () => {
    return (
        <>
            <aside>
                <ul>
                    <li className="aside__button">
                        <NavLink end style={({isActive}) => ({color: isActive ? '#98fa84' : 'inherit'})} to={`/`}>
                            <img src={project} alt="project" />
                            Project
                        </NavLink></li>
                    <li className="aside__button">
                        <NavLink end style={({isActive}) => ({color: isActive ? '#98fa84' : 'inherit'})} to={`/documentation`}>
                            <img src={documentation} alt="documentation" />
                            Documentation
                        </NavLink></li>
                    <li className="aside__button">
                        <NavLink end style={({isActive}) => ({color: isActive ? '#98fa84' : 'inherit'})} to={`/building`}>
                            <img src={building} alt="building" />
                            Building
                        </NavLink></li>
                    <li className="aside__button">
                        <NavLink end style={({isActive}) => ({color: isActive ? '#98fa84' : 'inherit'})} to={`/smarthouse`}>
                            <img src={smartHouse} alt="smartHouse" />
                            Smart house
                        </NavLink></li>
                    <li className="aside__button support">
                        <NavLink end style={({isActive}) => ({color: isActive ? '#98fa84' : 'inherit'})} to={`/support`}>
                            <div></div>
                            <img src={support} alt="support" />
                            Support
                        </NavLink></li>
                </ul>
            </aside>

            <Link end to={`/support`}>
                <div className="support-btn">
                    <img src={suportAbs} alt="support-button" />
                </div>
            </Link>
        </>
    )
}

export default Sidebar;