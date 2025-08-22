import { Resume } from './styles/components/resume/resume.jsx'

import { Form } from './styles/components/form/Form.jsx'

import { useState } from 'react'



export function ResumeGenerator(){
    const [genIn, setGenIn] = useState({
        fullName: "",
        emailAddress: "",
        linkedInProfile: "",
        phoneNumber: "",
        city:"",
        state: "",
        country: ""
    })

    const [jobHistory, setJobHistory] = useState([
        {   companyName:"",
            title: "",
            startDate: "",
            endDate: "",
            roleDescription: "",
            city:"",
            state: "",
            country:""
        }
    ])

    const [education, setEducation] = useState([
        {
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            city: "",
            state: "",
            country: ""
        }
    ])

    return(
        <div className="main">
            <Form genIn={genIn} setGenIn={setGenIn} jobHistory={jobHistory} setJobHistory={setJobHistory} education={education} setEducation={setEducation}></Form>
            <Resume genIn={genIn} jobHistory={jobHistory} education={education}></Resume>
        </div>
    )


}