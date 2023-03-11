import { useState, useContext } from "react";
import { useNavigate, useLocation, Link} from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { AuthContext } from "../../auth/AuthProvider";

import googleLogo from './img/googleLogo.png';
import facebookLogo from './img/facebookLogo.png';
import appleLogo from './img/appleLogo.png';

import './loginPage.scss';

const LoginPage = () => {
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    let navigate = useNavigate();
    let location = useLocation();
    
    const { signin, signout } = useContext(AuthContext);

    let from = location.state?.from?.pathname || "/project";

    const handleSubmit = (data) => {
        let userInfo = data;

        signin(userInfo, () => {
            navigate(from, { replace: true });
        });
    }

    const toggleSignup = () => {
        setIsSignupOpen(!isSignupOpen);
    }

    return (
        <div className="login">
            <div className="login__wrapper">
                <p name="back">
                    <Link to="/">Back to main page</Link>
                </p>
                <h1>Log in</h1>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                          errors.email = 'Email is required';
                        }
                        if (!values.password) {
                          errors.password = 'Password is required';
                        }
                        return errors;
                      }}
                    onSubmit={handleSubmit}
                >
                    <Form className="login__form">
                        <div className="login__form-single"> 
                            <label htmlFor="email">Email</label>
                            <Field 
                                className="login__form-input" 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="janedoe@gmail.com" />
                            <ErrorMessage name="email" component="div" className="login__form-input-error"/>
                        </div>
                        <div className="login__form-single">
                            <label htmlFor="password">Password</label>
                            <Field
                                className="login__form-input"
                                id="password"
                                name="password"
                                placeholder="enter your password"
                                type="password"
                            />
                            <ErrorMessage name="password" component="div" className="login__form-input-error"/>
                        </div>
                        <div className="login__form-button">
                            <button type="submit">Sign in</button>
                        </div>
                    </Form>
                </Formik>
                <div className="login__registration">
                    <p onClick={toggleSignup}>Sign up</p>
                    <p>Forgot password?</p>
                </div>
                
                {/* SIGN UP */}

                <div className="signup" style={{transform: `translateY(${isSignupOpen ? '0px' : '600px'})` }}>
                    <h2>Sign up</h2>
                    
                    <Formik
                        initialValues={{
                            email: '',
                            name: '',
                            password: '',
                            confirmedPassword: ''
                        }}
                        validate={values => {
                            const errors = {};
                            if (!values.name) {
                                errors.name = 'Name is required';
                            }
                            if (!values.email) {
                            errors.email = 'Email is required';
                            }
                            if (!values.password) {
                            errors.password = 'Password is required';
                            }
                            return errors;
                        }}
                        onSubmit={handleSubmit}
                    >
                        <Form className="signup__form">
                            <div className="signup__form-input-wrapper" >
                                <div className="signup__form-single"> 
                                    {/* <label htmlFor="name">Name</label> */}
                                    <Field 
                                        className="signup__form-input" 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        placeholder="your name" />
                                    <div name="separation" />
                                    {/* <ErrorMessage name="name" component="div" className="signup__form-input-error"/> */}
                                </div>
                                <div className="signup__form-single"> 
                                    <Field 
                                        className="signup__form-input" 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        placeholder="your email" />
                                    <div name="separation" />
                                    {/* <ErrorMessage name="email" component="div" className="signup__form-input-error"/> */}
                                </div>
                                <div className="signup__form-single">
                                    <Field
                                        className="signup__form-input"
                                        id="password"
                                        name="password"
                                        placeholder="create password"
                                        type="password"
                                    />
                                    <div name="separation" />
                                    {/* <ErrorMessage name="password" component="div" className="login__form-input-error"/> */}
                                    
                                </div>
                                <div className="signup__form-single"> 
                                    <Field
                                        className="signup__form-input"
                                        id="confirmedPassword"
                                        name="confirmedPassword"
                                        placeholder="confirm password"
                                        type="password"
                                    />
                                    {/* <ErrorMessage name="email" component="div" className="signup__form-input-error"/> */}
                                </div>
                            </div>

                            <div className="signup__form-button">
                                <p name="back-to-signin" onClick={toggleSignup}>Already have an account? Sign in</p>
                                <button type="submit">Sign up</button>
                            </div>
                        </Form>
                    </Formik>

                    <div className="signup__registration">
                        <p>Continue with</p>
                        <div>
                            <a href="#">
                                <img src={googleLogo} alt="google-logo" />
                            </a>
                            <a href="#">
                                <img src={facebookLogo} alt="facebook-logo" />
                            </a>
                            <a href="#">
                                <img src={appleLogo} alt="apple-logo" />
                            </a>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default LoginPage;