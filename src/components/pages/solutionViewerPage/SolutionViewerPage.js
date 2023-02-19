import { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import AutodeskPlatformService from "../../../services/AutodeskPlatformService";
import arrow from './img/arrow.svg';

import './solutionViewerPage.scss';

const SolutionViewer = () => {

    const [modelUrn, setModelUrn] = useState('');

    let navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        setModelUrn(location.state);
    }, [])
    
    let from = location.state?.from?.pathname || "/documentation";

    const backToDocumentationPage = () => {
        navigate(from, { replace: true });
    }

    const forge = useMemo(() => {return <AutodeskPlatformService modelUrn={modelUrn}/>}, [modelUrn])

    return (
        <div className="solution">
            <div onClick={backToDocumentationPage} className="solution__back">
                <img src={arrow} alt="arrow" />
                <p>Back</p>
            </div>
            <div className="solution__viewer">
                {forge}
            </div>
        </div>
    )
}

export default SolutionViewer;