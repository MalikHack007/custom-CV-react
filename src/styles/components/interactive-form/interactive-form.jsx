import { useState } from 'react';
import { CollapsedForm } from './__collapsed/interactive-form__collapsed.jsx';
import { TitleBlock } from './__title-block/interactive-form__title-block.jsx';
import { WorkExpForm } from '../work-experience-form/work-experience-form.jsx';
import { EducationForm } from '../education-history-form/education-history-form.jsx';
import { AddJobBtn } from './__add-job-btn/interactive-form__add-job-btn.jsx';
import { AddEduBtn } from './__add-edu-btn/interactive-form__add-edu-btn.jsx';

export function InteractiveForm(props){
    const { formName, formIcon, jobHistory, 
            education, setEducation, setJobHistory,
            educationBackUp, setEducationBackUp,
            jobHistoryBackUp, setJobHistoryBackUp } = props;

    const [formState, setFormState] = useState({ expanded: false, formIndex: null });

    let formList;
    let titleKey;
    let FormToDisplay;
    let NewFormButton;

    if(formName=="Education"){
        formList = education;
        titleKey = "school";
        FormToDisplay = EducationForm;
        NewFormButton = AddEduBtn;
    }

    else if(formName=="Experience"){
        formList = jobHistory;
        titleKey = "companyName";
        FormToDisplay = WorkExpForm;
        NewFormButton = AddJobBtn;
    }

    return(
        <div className="interactive-form">
            <CollapsedForm formName={formName} formIcon={formIcon} formState={formState} setFormState={setFormState}>
            </CollapsedForm>
            {
                formState.expanded ? ( formState.formIndex==null ? 
                <>
                {formList.map((formObj, index) => {
                    return (
                        <TitleBlock title={formObj[titleKey]} key={index} myKey={index} formState={formState} setFormState={setFormState}>
                        </TitleBlock>
                    )
                })}
                <NewFormButton formState={ formState } setFormState={ setFormState } 
                 jobHistory={ jobHistory } setJobHistory={ setJobHistory } 
                 education={ education } setEducation={ setEducation }/>
                </>
                : <FormToDisplay education={ education } setEducation={ setEducation } 
                   jobHistory={ jobHistory } setJobHistory={ setJobHistory } formState={ formState } 
                   setFormState={ setFormState } jobHistoryBackUp={ jobHistoryBackUp } setJobHistoryBackUp={ setJobHistoryBackUp }
                   educationBackUp={educationBackUp} setEducationBackUp={setEducationBackUp} />) : null 
            }
        </div>
    )
}