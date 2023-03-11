import { useState } from "react";
import { Formik, Field, Form } from 'formik';

import './servicesPage.scss';

const ServicesPage = () => {

    const [radio, setRadio] = useState('15');
    const [areaInput, setAreaInput] = useState(-1050);
    const [checkboxes, setCheckboxes] = useState(['architecture']);

    const handleRadioChange = (event) => {
        setRadio(event.target.getAttribute('data-value'));
    };

    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        const value = event.target.value;
    
        if (isChecked) {
            setCheckboxes([...checkboxes, value]);
        } else {
            setCheckboxes(checkboxes.filter((option) => option !== value));
        }
    };

    const calculateCost = () => {
        if (!radio || checkboxes.length === 0) {
            return 0;
        }

        let cost = 0;

        const sections = checkboxes.reduce((sum, cur) => {
            switch (cur) {
                case 'architecture':
                    return sum + 0.4;
                case 'structure':
                    return sum + 0.3;
                case 'mep':
                    return sum + 0.3;
                default:
                    throw new Error('There is no such section')
            };
        }, 0)
        
        cost = +radio * (+areaInput + 1550) * sections;

        return cost;
    }
    const cost = Math.ceil(calculateCost());

    const handleSubmit = () => {

    };

    return (
        <div className="services">
            <h1>Calculator</h1>
            <h2>Preliminary calculation of the project cost</h2>
            <Formik
                initialValues={{
                    service: '',
                    area: '',
                    section: [],
                    email: '',
                    name: '',
                    telephone: '',
                    comment: '',
                }}
                onSubmit={handleSubmit}
            >
                <Form className="services__form">
                    <div className="services__form-single">
                        <p>Basic services</p>
                        <label htmlFor="individual">
                            <Field type="radio" name="service" id="individual" value='individual'
                                data-value='15' 
                                checked={radio === '15'}
                                onChange={handleRadioChange}/>
                            Individual design
                        </label>
                        <label htmlFor="dimension">
                            <Field type="radio" name="service" id="dimension" value='dimension'
                                data-value='7' 
                                checked={radio === '7'}
                                onChange={handleRadioChange}/>
                            2D to 3D
                        </label>
                        <label htmlFor="changes">
                            <Field type="radio" name="service" id="changes" value='changes'
                            data-value='3'
                            checked={radio === '3'}
                            onChange={handleRadioChange}/>
                            Making changes to the finished project
                        </label>
                    </div>

                    <div className="services__form-single">
                        <p>House area</p>
                        <label htmlFor="area">
                            <div style={{left: `calc(${(+areaInput + 1450 ) * 100 / 2900}% - ${+areaInput * 7.5 / 1450}px)`}}>{+areaInput + 1550}</div>
                            <Field type="range" name="area" id="area" min="-1450" max="1450" step="25" 
                                value={areaInput} 
                                onChange={(e) => setAreaInput(e.target.value)}
                                style={{backgroundSize: `${(+areaInput + 1450 ) * 100 / 2900}%`}} />
                        </label>
                        <datalist id="range">
                            <option value="100" label="100"></option>
                            <option value="3000" label="3000"></option>
                        </datalist>
                    </div>

                    <div className="services__form-single">
                        <p>Basic services</p>
                        <label htmlFor="section-individual">
                            <Field type="checkbox" name="section" id="section-individual" value="architecture"
                                data-value='0.4'
                                checked={checkboxes.includes('architecture')}
                                onChange={handleCheckboxChange} />
                            Architecture
                        </label>
                        <label htmlFor="section-dimension">
                            <Field type="checkbox" name="section" id="section-dimension" value="structure"
                                data-value='0.3'
                                checked={checkboxes.includes('structure')}
                                onChange={handleCheckboxChange} />
                            Structural engineering
                        </label>
                        <label htmlFor="section-changes">
                            <Field type="checkbox" name="section" id="section-changes" value="mep" 
                            data-value='0.3'
                            checked={checkboxes.includes('mep')}
                            onChange={handleCheckboxChange} />
                            Mechanical, electrical and plumbing
                        </label>
                    </div>

                    <div className="services__form-single">
                        <p>Project cost</p>
                        <p name="total">Total: {cost}USD</p>
                    </div>

                    <h3>Submit application</h3>

                    <div className="services__form-single"> 
                        <p>Email</p>
                        <Field 
                            className="services__form-input" 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Your email" />
                    </div>

                    <div className="services__form-single">
                        <p>Name</p>
                        <Field
                            className="services__form-input"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            type="text"
                        />
                    </div>

                    <div className="services__form-single">
                        <p>Telephone</p>
                        <Field
                            className="services__form-input"
                            id="telephone"
                            name="telephone"
                            type="tel"
                        />
                    </div>

                    <div className="services__form-single">
                        <p>Comment</p>
                        <Field
                            className="services__form-input"
                            id="comment"
                            name="comment"
                            placeholder="Enter a comment"
                            as="textarea"
                        />
                    </div>
                    <div className="services__form-button">
                        <button type="submit">Send</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default ServicesPage;