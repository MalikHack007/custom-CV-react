import { GeneralInfoForm } from "../general-info-form/general-info-form.jsx";
import { InteractiveForm } from "../interactive-form/interactive-form.jsx";


export function Form(props){

    const { genIn, 
            setGenIn, 
            jobHistory, 
            jobHistoryBackUp,
            setJobHistory, 
            setJobHistoryBackUp,
            education, 
            educationBackUp,
            setEducation,
            setEducationBackUp } = props;

    const educationIcon = <i className="fa-solid fa-graduation-cap"></i>;
    const workIcon = <i className="fa-solid fa-briefcase"></i>;

    return(
        <form className="form">
            <GeneralInfoForm genIn={genIn} setGenIn={setGenIn} />

            <InteractiveForm formName="Education" formIcon={educationIcon} 
             jobHistory={jobHistory} jobHistoryBackUp={ jobHistoryBackUp }
             education={education} educationBackUp={ educationBackUp } 
             setEducation={setEducation} setEducationBackUp={ setEducationBackUp }
             setJobHistory={setJobHistory} setJobHistoryBackUp={ setJobHistoryBackUp }> 
            </InteractiveForm>

            <InteractiveForm formName="Experience" formIcon={ workIcon } 
             jobHistory={jobHistory} jobHistoryBackUp={ jobHistoryBackUp }
             education={education} educationBackUp={ educationBackUp } 
             setEducation={setEducation} setEducationBackUp={ setEducationBackUp }
             setJobHistory={setJobHistory} setJobHistoryBackUp={ setJobHistoryBackUp }> 
            </InteractiveForm>

        </form>

    );
}


