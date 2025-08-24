import { useState } from 'react';
import { CollapsedForm } from './__collapsed/interactive-form__collapsed.jsx';
import { TitleBlock } from './__title-block/interactive-form__title-block.jsx';

export function InteractiveForm(props){
    const { formName, formIcon, jobHistory, education } = props;

    const [formState, setFormState] = useState({ expanded: false, formIndex: null });

    let formList;
    let titleKey;

    if(formName=="Education"){
        formList = education;
        titleKey = "school";
    }

    else if(formName=="Experience"){
        formList = jobHistory;
        titleKey = "companyName";
    }

    return(
        <div className="interactive-form">
            <CollapsedForm formName={formName} formIcon={formIcon} formState={formState} setFormState={setFormState}>
            </CollapsedForm>
            {
                //TODO: when there is a form index present, replace the title block list with form.
                formState.expanded ? ((!formState.formIndex) ? 
                formList.map((formObj, index) => {
                    return (
                        <TitleBlock title={formObj[titleKey]} key={index} myKey={index} formState={formState} setFormState={setFormState}>
                        </TitleBlock>
                    )
                }) 
                : null) : null
            }
        </div>
    )
}