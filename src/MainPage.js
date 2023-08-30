import React from 'react';
import { NavLink } from 'react-router-dom';
const MainPage=()=>{
    return (
        <>
          <div className='home-main-container'>
            <div className='quiz-img-header'>
              <img src="Images/quiz-img-header.jpg" width="100%" height="100%"/>
            </div>
        <h2 style={{textAlign:"center", textDecoration:"none",color:"black"}}><NavLink to="/Subject" className="begin-the-test">Begin the Test</NavLink></h2>
        </div>
        </>
    )
}
export default MainPage;