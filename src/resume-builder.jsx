import { Resume } from './styles/components/resume/resume.jsx';

import { Form } from './styles/components/form/Form.jsx';

import { useState } from 'react'



export function ResumeGenerator(){
    const [genIn, setGenIn] = useState({
        fullName: "Eric Jackson",
        emailAddress: "ericj687@gmail.com",
        linkedInProfile: "https://www.linkedin.com/in/ericj/",
        phoneNumber: "573-383-0583",
        city:"Boise",
        state: "Idaho",
        country: "United States"
    })

    const [jobHistory, setJobHistory] = useState([
        {   
            companyName:"Yellow Rock",
            title: "Director",
            startDate: "12/23/2020",
            endDate: "Present",
            roleDescription: "Detail-oriented and motivated professional with experience in fast-paced environments. Skilled in communication, problem-solving, and adapting quickly to new challenges. Adept at working both independently and collaboratively to achieve organizational goals. Strong commitment to delivering high-quality results with efficiency and accuracy.",
            city:"Boston",
            state: "Massachusetts",
            country:"United States"
        }
    ])

    const [education, setEducation] = useState([
        {
            school: "University of Life",
            degree: "Hustler, BS",
            startDate: "08/15/2019",
            endDate: "05/15/2023",
            city: "London",
            state: "Texas",
            country: "United States"
        }
    ])

    return(
        <div className="main">
            <Form genIn={genIn} setGenIn={setGenIn} jobHistory={jobHistory} setJobHistory={setJobHistory} education={education} setEducation={setEducation}></Form>
            <Resume genIn={genIn} jobHistory={jobHistory} education={education}></Resume>
        </div>
    )


}