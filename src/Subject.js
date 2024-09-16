import React, { useEffect, useState } from "react";
import Ques from "./Questions";
import { useNavigate } from "react-router-dom";
const Subject =()=>{
    const navigate=useNavigate();
    const [Subjects,setSubject]=useState([]);
    useEffect(()=>{

setSubject(()=>
    {
        return Array.from(new Set(Ques.map((val)=>
        {return val.subject})))
    }
        )
    },[])
    return (
        <>
        <div className="subjects-main-container">
            <div>
                <div className="image-header-subjects">
                    <img src="Images/subjects-img-header.jpg" width="100%" height="100%" alt="subject-img-header"></img>
                </div>
                <div className="subject-container">
       {Subjects.map((val,index)=>{
        return <h2 key={index} className="subjects"
        onClick={()=>{navigate('/Quiz',{state:{subj:val}})}}>
            {val}</h2>
       })}
       </div>
       </div>
       </div>
        </>
    )
    
}
export default Subject;