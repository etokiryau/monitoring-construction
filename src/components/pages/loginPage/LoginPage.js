import { useContext } from "react";
import { useNavigate, useLocation, Link} from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { AuthContext } from "../../auth/AuthContext";

import './loginPage.scss';

const LoginPage = () => {

    let navigate = useNavigate();
    let location = useLocation();
    
    const { signin, signout } = useContext(AuthContext);

    let from = location.state?.from?.pathname || "/project";

    const handleSubmit = (data) => {
        let userInfo = data;

        signin(userInfo, () => {
            navigate(from, { replace: true });
        });
        setTimeout(() => signout(), 18000000)
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
                    <p>Sign up</p>
                    <p>Forgot password?</p>
                </div>
            </div>
        </div>
    )
}

// function AuthStatus() {
//     let auth = useAuth();
//     let navigate = useNavigate();
  
//     if (!auth.user) {
//       return <p>You are not logged in.</p>;
//     }
  
//     return (
//       <p>
//         Welcome {auth.user}!{" "}
//         <button
//           onClick={() => {
//             auth.signout(() => navigate("/"));
//           }}
//         >
//           Sign out
//         </button>
//       </p>
//     );
//   }

export default LoginPage;