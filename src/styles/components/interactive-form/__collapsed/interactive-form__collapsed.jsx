
export function CollapsedForm (props) {
    const { formName, formIcon, formState, setFormState } = props;

    let handleClick;

    let newFormState = {...formState};

    let chevronRotated;

    if(formName == "Education"){

        handleClick=()=>{
            setFormState(
                newFormState.eduExpanded ? 
                {...newFormState, eduExpanded: false} 
                : (newFormState.expExpanded ? {...newFormState, expExpanded: false, eduExpanded: true} 
                    : {...newFormState, eduExpanded: true}));
        }

        chevronRotated = formState.eduExpanded;

    }

    else if (formName == "Experience"){
        handleClick=()=>{
            setFormState(
                newFormState.expExpanded ? 
                {...newFormState, expExpanded: false} 
                : (newFormState.eduExpanded ? {...newFormState, eduExpanded: false, expExpanded: true} 
                    : {...newFormState, expExpanded: true}));
        }

        chevronRotated = formState.expExpanded;
    }

    return (
        
        <div className="interactive-form__collapsed" onClick={handleClick}>
            <div className="interactive-form__collapsed-left-sect">
                {formIcon}
                <h2>{`${formName}`}</h2>
            </div>

            <i className={`fa-solid fa-chevron-down ${chevronRotated ? "interactive-form__chevron_rotated" : "interactive-form__chevron"}`}></i> 

        </div>
    )
}