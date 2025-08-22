export function Work(props){
    const { jobHistory } = props;

    return(

        <div className="resume__work-exp">

            <div className="resume__sect-header">
                <h3>Professional Experience</h3>
            </div>

            <div className="resume__sect-body">
                {jobHistory.map((job, index)=>{
                    return (<div className="resume__sect-entry" key={index}>
                        <div className="resume__sect-content">
                            <div>{(job.startDate || job.endDate) ? `${job.startDate} - ${job.endDate}` : ""}</div>
                            <div>{(job.city || job.state || job.country) ? `${job.city}, ${job.state}, ${job.country}` : ""}</div>
                        </div>
                        <div className="resume__sect-content">
                            <div style={{fontWeight: "bold"}}>{job.companyName}</div>
                            <div>{job.title}</div>
                            <div>{job.roleDescription}</div>
                        </div>
                    </div>)
                })}
            </div>

        </div>
    )

}