import { GenIn } from "./__gen-in/resume__gen-in.jsx"
import{ Edu } from "./__edu/resume__edu.jsx"
import { Work } from "./__work-exp/resume__work-exp.jsx"
 

export function Resume(props){

    const {genIn, jobHistory, education} = props;


    return (
        <div className="resume">
            <GenIn genIn={genIn} />

            <Work jobHistory={jobHistory} />

            <Edu education={education} />
        </div>
    )
}