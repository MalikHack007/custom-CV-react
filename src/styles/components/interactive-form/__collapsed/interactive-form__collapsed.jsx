export function CollapsedForm (props) {
    const { formName, formIcon, formState, setFormState } = props;

    const handleClick = () => {
        let newFormState = {...formState};
        setFormState(newFormState.expanded ? {...newFormState, expanded: false} : {...newFormState, expanded: true});
    }

    return (
    
        <div className="interactive-form__collapsed" onClick={handleClick}>
            <div className="interactive-form__collapsed-left-sect">
                {formIcon}
                <h2>{`${formName}`}</h2>
            </div>

            <i className="fa-solid fa-chevron-down"></i> 

        </div>
    )
}