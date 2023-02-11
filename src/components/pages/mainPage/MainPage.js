import { Link } from "react-router-dom";

import './mainPage.scss';

function MainPage() {
    return (
        <div className="main">
            <div className="main__content">
                <h1>AIO Cottage</h1>
                <h2>This is the main page of the platform where there is no information yet</h2>
                <h2>The platform is meant to implement construction monitoring</h2>
                <h3>You can get acquainted with the account where functionality is located</h3>
                <h4>Proceed to the account with following button</h4>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default MainPage;