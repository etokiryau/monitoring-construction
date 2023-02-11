import { Outlet } from "react-router-dom";

import Sidebar from "../../sidebar/Sidebar";

import './appPage.scss';

function AppPage() {
    return (
        <div className="App">
            <Sidebar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default AppPage;