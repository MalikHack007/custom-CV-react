export function ActionButton(props){
    //Todo: hookup form state to the buttons.
    const { className, buttonName, buttonIcon=null, formState, setFormState, formName } = props;

    const { formIndex } = formState;

    let handleClick;
    

    if(formName=="Education"){
        const { education, setEducation, educationBackUp, setEducationBackUp } = props;

        let newFormState = {...formState, formIndex: null};

        switch (buttonName){
            case "Delete":
                handleClick = ()=>{
                    let newEducationArr = educationBackUp.map((edu)=>({...edu}));
                    newEducationArr.splice(formIndex, 1);
                    setEducation(newEducationArr.map((edu)=>({...edu})));
                    setEducationBackUp(newEducationArr.map((edu)=>({...edu})));
                    setFormState(newFormState);
                }   
                break;

            case "Save":
                handleClick = ()=>{
                    setEducationBackUp(education.map((edu)=>({...edu})));
                    setFormState(newFormState);
                }
                break;
            
            case "Cancel":
                handleClick = ()=>{
                    setEducation(educationBackUp.map((edu)=>({...edu})));
                    setFormState(newFormState);
                }
                break;
        }

    }

    else if (formName=="Experience"){
        const { jobHistory, setJobHistory, jobHistoryBackUp, setJobHistoryBackUp } = props;

        let newFormState = {...formState, formIndex: null};



        switch (buttonName){
            case "Delete":
                handleClick = ()=>{
                    let newJobHistory = jobHistoryBackUp.map((job)=>({...job}));
                    newJobHistory.splice(formIndex, 1);
                    setJobHistory(newJobHistory.map((job)=>({...job})));
                    setJobHistoryBackUp(newJobHistory.map((job)=>({...job})));
                    setFormState(newFormState);
                }   
                break;

            case "Save":
                handleClick = ()=>{
                    setJobHistoryBackUp(jobHistory.map((job)=>({...job})));
                    setFormState(newFormState);
                }
                break;
            
            case "Cancel":
                handleClick = ()=>{
                    setJobHistory(jobHistoryBackUp.map((job)=>({...job})));
                    setFormState(newFormState);
                }
                break;
        }
    }


    return(
        <button type="button" className={className} onClick={handleClick}>
            {buttonIcon}
            <p>{buttonName}</p>
        </button>
    )
}