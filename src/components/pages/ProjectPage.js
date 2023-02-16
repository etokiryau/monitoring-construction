import PersonalAccount from "../personalAccount/PersonalAccount";
import ProjectStatistics from "../projectStatistics/ProjectStatistics";
import ProjectWeatherCondition from "../projectWeatherCondition/WeatherCondition";

const Project = () => {
    return (
        <div className="account">
            <PersonalAccount />
            <ProjectWeatherCondition/>
            <ProjectStatistics/>
        </div>
    )
}

export default Project;