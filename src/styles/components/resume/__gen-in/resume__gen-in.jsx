export function GenIn(props){
    const { genIn } = props;

    return(
            <div className="resume__gen-in">
                <div>
                    <h1>{genIn.fullName}</h1>
                </div>

                <div className="resume__sub-sect1">
                    <div>{genIn.emailAddress}</div>
                    <div>{genIn.linkedInProfile}</div>
                    <div>{genIn.phoneNumber}</div>
                </div>

                <div className="resume__sub-sect1">
                    <div style={{justifySelf: "end"}}>{genIn.city}</div>
                    <div style={{justifySelf: "center"}}>{genIn.state}</div>
                    <div style={{justifySelf: "start"}}>{genIn.country}</div>
                </div>
            </div>
    )
}
            
            
