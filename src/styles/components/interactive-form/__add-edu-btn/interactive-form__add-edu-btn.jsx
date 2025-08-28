export function AddEduBtn(props){
    const { formState, setFormState, education, setEducation } = props;

    const handleClick = ()=>{
        const educationCopy = education.map((edu)=>({...edu}));

        const newFormState = {...formState, formIndex: educationCopy.length};

        educationCopy.push({
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            city: "",
            state: "",
            country: ""
        })

        setEducation(educationCopy.map((edu)=>({...edu})));

        setFormState(newFormState);
    }

    return(
        <div className="interactive-form__btn-container">
            <button className="interactive-form__add-edu-btn" onClick={handleClick}>
                <i class="fa-solid fa-plus"></i>
                <h4>Education</h4>
            </button>
        </div>
    )
}