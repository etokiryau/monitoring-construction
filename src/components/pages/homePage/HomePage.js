import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../auth/AuthContext";

import './homePage.scss';

const HomePage = () => {

    const { user } = useContext(AuthContext);
    let pathname = user ? '/project' : '/login';

    return (
        <div className="home">
            <div className="home__content">
                <h1>AIO Cottage</h1>
                <h2>This is the home page of the platform where there is no information yet</h2>
                <h2>The platform is meant to implement construction monitoring</h2>
                <h3>You can get acquainted with the account where functionality is located</h3>
                <h4>Proceed to the account with following button</h4>
                <Link to={pathname}>Login</Link>
            </div>
        </div>
    )
}

export default HomePage;