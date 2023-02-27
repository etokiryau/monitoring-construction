

import aioLogo from './img/aioLogo.png';
import downArrow from './img/downArrow.png';
import threeDIcon from './img/threeDIcon.png';

import mainVideo from './video/mainVideo.mp4';

import './homePage.scss';

const HomePage = () => {

    return (
        <div className="home">
            <div className="home__start">
                <div className="home__start-video">
                    <video src={mainVideo} type="video/mp4" autoPlay loop muted></video>
                </div>
                
                <div className="home__start-navigate">
                    <img src={aioLogo} alt="logo" />
                    <div>High-tech projects of cottages</div>
                    <img src={downArrow} alt="down-arrow" />
                </div>
            </div>

            <div className="home__info">
                <h1>INNOVATIVE TECHNOLOGIES IN PRIVATE CONSTRUCTION</h1>
                <h2>BIM-projects</h2>
                <p>A solution that will allow you to:</p>
                <div className="home__info-allow">
                    <div className="home__info-allow-statistics">
                        <div>
                            <span>15%</span>
                            <span>30%</span>
                            <span>100%</span>
                        </div>
                        <div>
                            <p>Saving money</p>
                            <p>Reducing construction time</p>
                            <p>Better quality project</p>
                        </div>
                    </div>
                    <div className="home__info-allow-threed">
                        <img src={threeDIcon} alt="3dicon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;