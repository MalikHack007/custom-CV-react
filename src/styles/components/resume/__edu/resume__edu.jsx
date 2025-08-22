export function Edu(props){
    const { education } = props;

    return(
            <div className="resume__edu">
                <div className="resume__sect-header"><h3>Education</h3></div>
                <div className="resume__sect-body">
                    {education.map((edu, index)=>{
                        return(
                            <div className="resume__sect-entry" key={index}>
                                <div className="resume__sect-content">
                                    <div>{`${edu.startDate} - ${edu.endDate}`}</div>
                                    <div>{`${edu.city}, ${edu.state}, ${edu.country}`}</div>
                                </div>

                                <div className="resume__sect-content">
                                    <div style={{fontWeight: "bold"}}>{edu.school}</div>
                                    <div>{edu.degree}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
    )
}
     