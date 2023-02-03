import { useRef } from 'react';
import book from './img/book.png';
import pdf from './img/pdf.png';

import './drawings.scss';

const Drawings = () => {

    const archRef = useRef(null);
    const constRef = useRef(null);
    const waterRef = useRef(null);
    const heatingRef = useRef(null);
    const powerRef = useRef(null);

    const handleFocus = (solution) => {
        let offsetY;
        switch (solution) {
            case 'architecture':
                offsetY = archRef.current.offsetTop;
                break;
            case 'construct':
                offsetY = constRef.current.offsetTop;
                break;
            case 'water':
                offsetY = waterRef.current.offsetTop;
                break;
            case 'heating':
                offsetY = heatingRef.current.offsetTop;
                break;
            case 'power':
                offsetY = powerRef.current.offsetTop;
                break;
        }
        window.scrollTo({
            top: offsetY - window.innerHeight / 2 + 100,
            behavior: 'smooth'
          });
    }

    return (
        <div className="drawings">
            <p className='drawings__head'>Drawings</p>
            <p className='drawings__head-beneath'>Check out the drawings online or download them</p>
            <div className="drawings__disciplines">
                <ul>
                    <li onClick={() => handleFocus('architecture')}>Architecture</li>
                    <li onClick={() => handleFocus('construct')}>Construct</li>
                    <li onClick={() => handleFocus('water')}>Water, sanitation</li>
                    <li onClick={() => handleFocus('heating')}>Heating, ventilation</li>
                    <li onClick={() => handleFocus('power')}>Power supply</li>
                </ul>
            </div>
            
            <div className='drawings__instruction'>
                <img src={book} alt="instruction" />
                <p>Instructions for our platform</p>
            </div>

            <div className='drawings__solutions'>
                <div ref={archRef} name="architecture" className="drawings__solutions-single">
                    <div className="drawings__solutions-single-left">
                        <p>Architectural solutions</p>
                        <div>
                            <img src={pdf} alt="pdf" />
                            <p>Download drawings</p>
                        </div>
                    </div>
                    <div className="drawings__solutions-single-right">
                        Autodesk platform services
                    </div>
                </div>

                <div ref={constRef} name="construct" className="drawings__solutions-single">
                    <div className="drawings__solutions-single-left">
                        <p>Constructive solutions</p>
                        <div>
                            <img src={pdf} alt="pdf" />
                            <p>Download drawings</p>
                        </div>
                    </div>
                    <div className="drawings__solutions-single-right">
                        Autodesk platform services
                    </div>
                </div>

                <div ref={waterRef} name="water" className="drawings__solutions-single">
                    <div className="drawings__solutions-single-left">
                        <p>Water, sanitation</p>
                        <div>
                            <img src={pdf} alt="pdf" />
                            <p>Download drawings</p>
                        </div>
                    </div>
                    <div className="drawings__solutions-single-right">
                        Autodesk platform services
                    </div>
                </div>

                <div ref={heatingRef} name="water" className="drawings__solutions-single">
                    <div className="drawings__solutions-single-left">
                        <p>Heating, ventilation</p>
                        <div>
                            <img src={pdf} alt="pdf" />
                            <p>Download drawings</p>
                        </div>
                    </div>
                    <div className="drawings__solutions-single-right">
                        Autodesk platform services
                    </div>
                </div>

                <div ref={powerRef} name="water" className="drawings__solutions-single">
                    <div className="drawings__solutions-single-left">
                        <p>Power supply</p>
                        <div>
                            <img src={pdf} alt="pdf" />
                            <p>Download drawings</p>
                        </div>
                    </div>
                    <div className="drawings__solutions-single-right">
                        Autodesk platform services
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawings;