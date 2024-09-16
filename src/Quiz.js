import React, { useEffect, useState } from 'react';
import "./Quiz.css";
import Ques from './Questions';
import { useLocation, useNavigate } from 'react-router-dom';

const Quiz = () => {
  const [x, setx] = useState(0);
  const [Question, setquestion] = useState([]);
  const [Length, setlength] = useState(0);
  const [score, setscore] = useState(0);
  const [option, setoption] = useState();
  const [result, setresultdisplay] = useState(false);
  const [flag, setFlag] = useState([]);
const navigate=useNavigate();
  const subject = useLocation();

  useEffect(() => {
    console.log(subject.state.subj);
    setquestion(() => {
      return Ques.filter((val) => {
        return val.subject === subject.state.subj;
      });
    });
  }, []);

  useEffect(() => {
    console.log(Question.length);
    setlength(Question.length);
    setFlag(new Array(Question.length).fill(false));
  }, [Question]);

  const handleNext = (index) => {
    setx(x + 100);
    if (flag[index] === false && option === Question[index].answer) {
      setscore(score + 1);
      setFlag((prevFlags) => {
        const newFlags = [...prevFlags];
        newFlags[index] = true;
        return newFlags;
      });
    }
    else if(flag[index]===true){
      setscore(option===Question[index].answer?score:score-1);
    }
    setoption('');
  };

  return (
    <div>
      <div className='quiz-main-container'>
        <div className='quiz-container'>
        {Question.map((val, index) => (
          <div style={{minWidth:"100%",transform: `translateX(-${x}%)`,transition:"0.5s"}}>
          <div className='quizs' key={index}>
              <h3 className="question">{index + 1}. &nbsp;{val.question}</h3>
              <div className='options'>
              <p className='opt'
               style={{
                 backgroundColor: option === 'option1' ? 'green' : 'black',
               }}
               onClick={() => {
                 setoption('option1');
               }}>
               (a)&emsp;{val.option1}
              </p>
              <p className='opt'
                style={{
                  backgroundColor: option === 'option2' ? 'green' : 'black',
                }}
                onClick={() => {
                  setoption('option2');
                }}>
                (b)&emsp;{val.option2}
              </p>
              <p className='opt'
                style={{
                    backgroundColor: option === 'option3' ? 'green' : 'black',
                }}
                onClick={() => {
                  setoption('option3');
                }}>
                (c)&emsp;{val.option3}
                </p>
              <p className='opt'
                style={{
                  backgroundColor: option === 'option4' ? 'green' : 'black',
                }}
                onClick={() => {
                    setoption('option4');
                  }}>
                (d)&emsp;{val.option4}
              </p>
              </div>
              </div>
            <div className='button-group'>
              {index !== 0 && (
                <button className='btn btn-primary' onClick={() => setx(x - 100)}>
                  prev
                </button>
              )}
              {index !== Length - 1 ? (
                <button className='btn btn-success' onClick={() => handleNext(index)}>
                  next
                </button>
              ) : (
                <button
                  className='btn btn-success'
                  style={{ float: 'right' }}
                  onClick={() => {
                    if (flag[index] === false && val.answer === option) {
                      setscore(score=>score + 1);
                      setFlag((prevFlags) => {
                        const newFlags = [...prevFlags];
                        newFlags[index] = true;
                        return newFlags;
                      });
                      navigate('/Result',{state:{score:score+1,Length:Length,subj:subject.state.subj}})
                    }
                    else
                    navigate('/Result',{state:{score:score,Length:Length,subj:subject.state.subj}})
                  }}>
                  submit
                </button>
              )}
              
            </div>
          </div>
        ))}
      </div>
      </div>
     
    </div>
  );
};

export default Quiz;
