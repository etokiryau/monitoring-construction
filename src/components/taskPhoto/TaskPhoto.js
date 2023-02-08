import info from './img/info.svg';
import reference from './img/reference.svg';
import brickLayer from './img/brickLayer.png';
import stub from './img/stub.svg';

import './taskPhoto.scss';

const TaskPhoto = () => {

    return (
        <div className="photo">
            <div className="photo__part">
                <div className="photo__part-info">
                    <img src={info} alt="info" />
                    <p>The first row of bricks must be aligned and must be at the same level around the entire perimeter of the building</p>
                </div>

                <div className="photo__part-reference">
                    <img src={reference} alt="reference" />
                    <p>Reference</p>
                </div>
                <img name="reference" src={brickLayer} alt="bricklayer" />

                <div className="photo__part-reference">
                    <img src={reference} alt="reference" />
                    <p>How it is built</p>
                </div>
                <img name="reference" src={stub} alt="stub" />
            </div>

            <div className="photo__part">
                <div className="photo__part-info">
                    <img src={info} alt="info" />
                    <p>The laying specialist must perform a dry laying, which will allow him to evaluate the correct laying before it is directly installed</p>
                </div>

                <div className="photo__part-reference">
                    <img src={reference} alt="reference" />
                    <p>Reference</p>
                </div>
                <img name="reference" src={brickLayer} alt="bricklayer" />

                <div className="photo__part-reference">
                    <img src={reference} alt="reference" />
                    <p>How it is built</p>
                </div>
                <img name="reference" src={stub} alt="stub" />
            </div>

            <div className="photo__part">
                <div className="photo__part-info">
                    <img src={info} alt="info" />
                    <p>Notice the vertical deviations. There should be no bumps and depressions along the entire vertical wall. Permissible deviation per 1 floor 30mm</p>
                </div>

                <div className="photo__part-reference">
                    <img src={reference} alt="reference" />
                    <p>Reference</p>
                </div>
                <img name="reference" src={brickLayer} alt="bricklayer" />

                <div className="photo__part-reference">
                    <img src={reference} alt="reference" />
                    <p>How it is built</p>
                </div>
                <img name="reference" src={stub} alt="stub" />
            </div>
        </div>
    )
}

export default TaskPhoto;