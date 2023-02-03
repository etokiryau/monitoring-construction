import PersonalAccount from "../personalAccount/PersonalAccount";


const Project = ({onChangeLoginStatus}) => {
    return (
        <>
            <PersonalAccount onChangeLoginStatus={onChangeLoginStatus}/>
        </>
    )
}

export default Project;