import PersonalAccount from "../personalAccount/PersonalAccount";
import ProjectStatistics from "../projectStatistics/ProjectStatistics";
import ProjectWeatherCondition from "../projectWeatherCondition/WeatherCondition";

const Project = ({AuthContext}) => {
    return (
        <div className="account">
            <PersonalAccount AuthContext={AuthContext}/>
            <ProjectWeatherCondition/>
            <ProjectStatistics/>
        </div>
    )
}

export default Project;