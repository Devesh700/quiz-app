import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { Home, Replay } from '@mui/icons-material';
const Result = () => {
    const navigate=useNavigate();
    const DatafromQuiz=useLocation();
  return (
    <div className='result-main-container'>
       <div className='result'>
        <div className='image-header-result'>
          <img src="Images/result.jpg" width="100%" height="100%"/>
        </div>
        <h2 className='res'>
          {DatafromQuiz.state.score / DatafromQuiz.state.Length >= 0.7
            ? ` you achieved ${(DatafromQuiz.state.score / DatafromQuiz.state.Length) * 100}%`
            : ' oops try again'}
            
        </h2>
        <p>your scored {DatafromQuiz.state.score} out of {DatafromQuiz.state.Length}</p>
        <Button className="bg-info " onClick={()=>{navigate('/Quiz',{state:{subj:DatafromQuiz.state.subj}})}}><Replay/></Button> &emsp;
        <Button className="bg-primary " onClick={()=>{navigate('/Subject',{state:{subj:DatafromQuiz.state.subj}})}}><Home/></Button>
      </div>
    </div>
  )
}

export default Result;
