export function AddJobBtn(props){
    const { formState, setFormState, jobHistory, setJobHistory } = props;

    const handleClick = ()=>{
        const jobHistoryCopy = jobHistory.map((job)=>({...job}));

        const newFormState = {...formState, formIndex: jobHistoryCopy.length};

        jobHistoryCopy.push({
            companyName:"",
            title: "",
            startDate: "",
            endDate: "",
            roleDescription: "",
            city:"",
            state: "",
            country:""
        })

        setJobHistory(jobHistoryCopy.map((job)=>({...job})));

        setFormState(newFormState);
    }

    return(
        <div className="interactive-form__btn-container">
            <button className="interactive-form__add-job-btn" onClick={handleClick}>
                <i class="fa-solid fa-plus"></i>
                <h4>Experience</h4>
            </button>
        </div>
    )
}