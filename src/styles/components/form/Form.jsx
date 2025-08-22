import { GeneralInfoForm } from "../general-info-form/general-info-form.jsx";
import { WorkExpForm } from "../work-experience-form/work-experience-form.jsx";
import { EducationForm } from "../education-history-form/education-history-form.jsx";


export function Form(props){

    const { genIn, 
            setGenIn, 
            jobHistory, 
            setJobHistory, 
            education, 
            setEducation } = props;

    return(
        <form className="form">
            <GeneralInfoForm genIn={genIn} setGenIn={setGenIn} />

            <WorkExpForm jobHistory={jobHistory} setJobHistory={setJobHistory} />

            <EducationForm education={education} setEducation={setEducation} />
        </form>

    );
}


