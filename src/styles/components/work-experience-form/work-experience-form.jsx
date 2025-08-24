import { Input } from '../input/input.jsx';

export function WorkExpForm(props){
    const { jobHistory, setJobHistory} = props;

    const handleJobHistoryChange = (index, e) => {
        const newJobHistory = [...jobHistory];
        newJobHistory[index][e.target.name] = e.target.value;
        setJobHistory(newJobHistory);
    }

    return(
        <div className="work-experience-form">
            <h2>Experience</h2>
            {jobHistory.map((job, index)=>{
                return(
                <div className="work-experience-form__work-entry" key={index}>
                    <div className="input-group">
                        <label htmlFor="companyName" className="label">
                            <span>Company</span>
                        </label>
                        <Input type="text" name="companyName" placeholder="Company XXX" value={job.companyName} onChange={(e) => handleJobHistoryChange(index, e)}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="title" className="label">
                            <span>Title</span>
                        </label>
                        <Input type="text" name="title" placeholder="Product Manager" value={job.title} onChange={(e) => handleJobHistoryChange(index, e)}/>
                    </div>
                    

                    <div className="input-group">
                        <label htmlFor="startDate" className="label">
                            <span>Start Date</span>
                        </label>
                        <Input type="text" name="startDate" placeholder="mm/dd/yyyy" value={job.startDate} onChange={(e) => handleJobHistoryChange(index, e)}/>
                    </div>
                    

                    <div className="input-group">
                        <label htmlFor="endDate" className="label">
                            <span>End Date</span>
                        </label>
                        <Input type="text" name="endDate" placeholder="mm/dd/yyyy" value={job.endDate} onChange={(e) => handleJobHistoryChange(index, e)}/>
                    </div>
                    

                    <div className="input-group">
                        <label htmlFor="roleDescription" className="label">
                            <span>Role Description</span>
                        </label>
                        <Input type="text" name="roleDescription" placeholder="Describe your role" value={job.roleDescription} onChange={(e) => handleJobHistoryChange(index, e)}/>
                    </div>
                    

                    <div className="input-group">
                        <label htmlFor="city" className="label">
                            <span>City</span>
                        </label>
                        <Input type="text" name="city" placeholder="Austin" value={job.city} onChange={(e) => handleJobHistoryChange(index, e)}/>
                    </div>
                    

                    <div className="input-group">
                        <label htmlFor="state" className="label">
                            <span>State</span>
                        </label>
                        <Input type="text" name="state" placeholder="Texas" value={job.state} onChange={(e) => handleJobHistoryChange(index, e)}/>
                    </div>
                    

                    <div className="input-group">
                        <label htmlFor="country" className="label">
                            <span>Country</span>
                        </label>
                        <Input type="text" name="country" placeholder="United States" value={job.country} onChange={(e) => handleJobHistoryChange(index, e)}/>
                    </div>
                    
                </div>
            )
            })}
        </div>
    )
}