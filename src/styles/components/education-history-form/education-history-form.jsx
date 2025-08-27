import { Input } from '../input/input.jsx';
import { ActionButton } from '../action-button/action-button.jsx';

export function EducationForm(props){
    const { education, setEducation, educationBackUp, setEducationBackUp, formState, setFormState } = props;

    const index = formState.formIndex;

    const edu = education[index];

    const handleEducationChange = (index, e) => {
        const newEducations = [...education];
        newEducations[index][e.target.name] = e.target.value;
        setEducation(newEducations);
    }
    return (
        <div className="education-history-form">
            <div className="education-history-form__edu-entry">
                <div className="input-group">
                    <label htmlFor="school" className="label">
                        <span>School</span>
                    </label>
                    <Input type="text" name="school" placeholder="University of Life" value={edu.school} onChange={(e) => handleEducationChange(index, e)}/>
                </div>

                <div className="input-group">
                    <label htmlFor="degree" className="label">
                        <span>Degree</span>
                    </label>
                    <Input type="text" name="degree" placeholder="Hustler, BS" value={edu.degree} onChange={(e) => handleEducationChange(index, e)}/>
                </div>    
                    

                <div className="input-group">
                    <label htmlFor="startDate" className="label">
                        <span>Start Date</span>
                    </label>
                    <Input type="text" name="startDate" placeholder="mm/dd/yyyy" value={edu.startDate} onChange={(e) => handleEducationChange(index, e)}/>
                </div> 
                    

                <div className="input-group">
                    <label htmlFor="endDate" className="label">
                        <span>End Date</span>
                    </label>
                    <Input type="text" name="endDate" placeholder="mm/dd/yyyy" value={edu.endDate} onChange={(e) => handleEducationChange(index, e)}/>
                </div>
                    

                <div className="input-group">
                    <label htmlFor="city" className="label">
                        <span>City</span>
                    </label>
                    <Input type="text" name="city" placeholder="austin" value={edu.city} onChange={(e) => handleEducationChange(index, e)}/>
                </div>
                    

                <div className="input-group">
                    <label htmlFor="state" className="label">
                        <span>State</span>
                    </label>
                    <Input type="text" name="state" placeholder="Texas" value={edu.state} onChange={(e) => handleEducationChange(index, e)}/>
                </div>
                    

                <div className="input-group">
                    <label htmlFor="country" className="label">
                        <span>Country</span>
                    </label>
                    <Input type="text" name="country" placeholder="United States" value={edu.country} onChange={(e) => handleEducationChange(index, e)}/>
                </div>
                
            </div>
            <div className="education-history-form__button-row">
                
                <ActionButton education={ education } setEducation={ setEducation } formState={ formState } 
                setFormState={ setFormState } formName="Education" className="action-button action-button_style-grey" 
                buttonName="Delete" buttonIcon={<i className="fa-solid fa-trash"></i>} educationBackUp={ educationBackUp } 
                setEducationBackUp={setEducationBackUp}>
                </ActionButton>

                <div className="education-history-form__btn-row-right">

                    <ActionButton education={ education } setEducation={ setEducation } formState={ formState } 
                     setFormState={ setFormState } formName="Education" className="action-button action-button_style-grey" 
                     buttonName="Cancel" educationBackUp={ educationBackUp } setEducationBackUp={setEducationBackUp}>
                    </ActionButton>

                    <ActionButton education={ education } setEducation={ setEducation } formState={ formState } 
                     setFormState={ setFormState } formName="Education" className="action-button action-button_style-blue" 
                     buttonName="Save" educationBackUp={ educationBackUp } setEducationBackUp={setEducationBackUp}>
                    </ActionButton> 

                </div>
                
            </div>
        </div>
    )

}