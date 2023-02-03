import { Formik, Field, Form } from 'formik';
import './loginPage.scss';

const LoginPage = ({onChangeLoginStatus}) => {

    return (
        <div className="login">
            <div className="login__wrapper">
                <h1>Log in</h1>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}

                    onSubmit={onChangeLoginStatus}
                >
                    <Form className="login__form">
                        <label className="login__form-label" htmlFor="email">Email</label>
                        <Field className="login__form-input" type="email" id="email" name="email" placeholder="janedoe@gmail.com" />

                        <label className="login__form-label" htmlFor="password">Password</label>
                        <Field
                            className="login__form-input"
                            id="password"
                            name="password"
                            placeholder="enter your password"
                            type="password"
                        />
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

export default LoginPage;