import { Outlet, Link } from "react-router-dom";

import Sidebar from "../../sidebar/Sidebar";
import home from './img/home.svg';

import './accountPage.scss';

function AcountPage() {
    return (
        <div className="account">
            <Sidebar/>
            <main>
                <Outlet/>
            </main>

            <Link to='/' className="home">
                <img src={home} alt="home" />
            </Link>
        </div>
    )
}

export default AcountPage;