import React from 'react';
import MainPage from './MainPage';
import { Routes,Route } from 'react-router-dom';
import Subject from './Subject';
import Quiz from './Quiz';
import Result from './Result';

const App = () => {


  return (
    <div>
      {/* <MainPage/> */}
      <Routes>
        <Route path='/' Component={MainPage}></Route>
        <Route path='/Subject' Component={Subject}></Route>
        <Route path='/Quiz' Component={Quiz}></Route>
        <Route path='/Result' Component={Result}></Route>
      </Routes>
    </div>
  )
}

export default App
