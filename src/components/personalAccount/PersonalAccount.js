import { useState, useEffect, useRef, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from 'formik';

import icon from './img/user.png';
import close from './img/close.png';

import './personalAccount.scss';

const PersonalAccount = ({AuthContext}) => {

    let { user, signout } = useContext(AuthContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [tempUser, setTempUser] = useState({name: 'Kirill', email: user.email})

    const modalRef = useRef(null);
    const editProfileRef = useRef(null);

    let navigate = useNavigate();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleLogOut = () => {
        signout(() => navigate("/"));
    }

    const toggleEditProfile = () => {
        setIsEditProfileOpen(!isEditProfileOpen);
        setIsModalOpen(false);
    }

    const handleSubmitEditProfile = (data) => {
        user.email = data.email;
        setTempUser({...tempUser, ...data});
        setIsEditProfileOpen(false);
        setIsModalOpen(true);
    }

    useEffect(() => {
        document.body.style.overflow = isEditProfileOpen ? "hidden" : "visible";
    }, [isEditProfileOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [modalRef]);

    return (
        <>
            <div ref={modalRef} className="account__profile">
                <img onClick={() => toggleModal()} src={icon} alt="account icon" />
                <div style={{'display': isModalOpen ? 'flex' : 'none'}} className="account__profile-modal">
                    <div>
                        <p name="name">{tempUser.name}</p>
                        <p>({tempUser.email})</p>
                    </div>
                    <div>
                        <p onClick={toggleEditProfile} className="account__profile-modal-link">Edit profile</p>
                        <p className="account__profile-modal-link" onClick={handleLogOut}>Log out</p>
                    </div>
                    <div style={{borderBottom: 'thin solid #8D8D8D'}}></div>
                    <div>
                        <p>PROJECTS</p>
                    </div>
                    <div>
                        <ul>
                            <li className="account__profile-modal-link">Project a</li>
                            <li className="account__profile-modal-link">Project b</li>
                            <li className="account__profile-modal-link">Project c</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div style={{display: isEditProfileOpen ? 'flex' : 'none'}} className="account__editprofile-wrapper">
                <div ref={editProfileRef} className="account__editprofile">
                    <img onClick={toggleEditProfile} className="account__editprofile-closebtn" src={close} alt="close" />
                    <h2 className="account__editprofile-head">Profile</h2>
                    <Formik
                        initialValues={tempUser}
                        onSubmit={handleSubmitEditProfile}
                    >
                        <Form className="account__editprofile-form">
                            <label htmlFor="name">Name</label>
                            <Field type="text"
                                id="name" 
                                name="name"
                            />
                            <label htmlFor="email">Email</label>
                            <Field type="email" 
                                id="email" 
                                name="email"
                            />
                            <p>Picture</p>
                            <button name="image" type="button">Upload Image</button>
                            <p>Language</p>
                            <div className="account__editprofile-form">
                                <div className="account__editprofile-form-select">
                                    <select name="language" id="account__editprofile-language">
                                        <option value="english">English</option>
                                        <option value="russian">Russian</option>
                                        <option value="spanish">Spanish</option>
                                    </select>
                                </div>
                            </div>
                            <p className="account__editprofile-changepass">Change password</p>
                            <div className="account__editprofile-result">
                                <button onClick={toggleEditProfile} name="result" type="button">Cancel</button>
                                <button name="result" type="submit">Save</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>

            <div className="account__wrapper">
                <p className="account__head">Your personal account</p>
                <p className="account__project-code">SKU: 100.951.116</p>
            </div>
        </>
    )
}

export default PersonalAccount;