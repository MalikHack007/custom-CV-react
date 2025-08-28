import { CollapsedForm } from './__collapsed/interactive-form__collapsed.jsx';
import { TitleBlock } from './__title-block/interactive-form__title-block.jsx';
import { WorkExpForm } from '../work-experience-form/work-experience-form.jsx';
import { EducationForm } from '../education-history-form/education-history-form.jsx';
import { AddJobBtn } from './__add-job-btn/interactive-form__add-job-btn.jsx';
import { AddEduBtn } from './__add-edu-btn/interactive-form__add-edu-btn.jsx';
import { motion, AnimatePresence } from 'motion/react';

export function InteractiveForm(props){
    const { formName, formIcon, jobHistory, 
            education, setEducation, setJobHistory,
            educationBackUp, setEducationBackUp,
            jobHistoryBackUp, setJobHistoryBackUp, 
            formState, setFormState } = props;

    let formList;
    let titleKey;
    let FormToDisplay;
    let NewFormButton;
    let formExpanded;

    if(formName=="Education"){
        formList = education;
        titleKey = "school";
        FormToDisplay = EducationForm;
        formExpanded = formState.eduExpanded;
        NewFormButton = AddEduBtn;
    }

    else if(formName=="Experience"){
        formList = jobHistory;
        titleKey = "companyName";
        FormToDisplay = WorkExpForm;
        formExpanded = formState.expExpanded;
        NewFormButton = AddJobBtn;
    }

    return(
        <div className="interactive-form">
            <CollapsedForm formName={formName} formIcon={formIcon} formState={formState} setFormState={setFormState}>
            </CollapsedForm> 
            {
                formExpanded ? ( formState.formIndex==null ? 
                <AnimatePresence>
                {formList.map((formObj, index) => {
                    return (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="interactive-form__title-block-container"
                        >
                        <TitleBlock title={formObj[titleKey]} key={index} myKey={index} formState={formState} setFormState={setFormState}>
                        </TitleBlock>

                        </motion.div>

                        )
                        })}
                        <motion.div
                            key="new-form-btn"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <NewFormButton formState={ formState } setFormState={ setFormState } 
                            jobHistory={ jobHistory } setJobHistory={ setJobHistory } 
                            education={ education } setEducation={ setEducation }/>
                        </motion.div>

                </AnimatePresence>
                : <FormToDisplay education={ education } setEducation={ setEducation } 
                   jobHistory={ jobHistory } setJobHistory={ setJobHistory } formState={ formState } 
                   setFormState={ setFormState } jobHistoryBackUp={ jobHistoryBackUp } setJobHistoryBackUp={ setJobHistoryBackUp }
                   educationBackUp={educationBackUp} setEducationBackUp={setEducationBackUp} />) : null 
            }
        </div>
    )
}