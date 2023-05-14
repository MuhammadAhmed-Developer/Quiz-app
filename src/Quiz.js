import React, { useState } from 'react';
import questions from './QuizData';
import QuizResult from './QuizResult'

export default function Quiz() {


    const [currentQuestion, setCurrentQuestion] = useState(0)
     const [score, setScore] = useState(0)
     const [correctAns, setCorrectAns] = useState(0)
     const [showResult, setShowResult] = useState(false)

     const handlePlayAgain = () =>{
        
     }
     
    const handleNext = () =>{
        const nextQuestion = currentQuestion + 1
        if (nextQuestion<questions.length) {
        setCurrentQuestion(nextQuestion)
            
        }else{
            setShowResult(true)
        }
    }


    const handleAnswer = (isCorrect) => {
       if(isCorrect){
          setScore(score + 5)
          setCorrectAns(correctAns + 1)
       }
    }

  return (
    <>
     <div className='app'>
        
        {showResult ? <QuizResult score = {score} correctAns = {correctAns}/> :<>
        <div className='question-section'>
           <h5>Score: {score}</h5>
           <div className='question-count'>
             <span>Question {currentQuestion + 1} of {questions.length}</span>
           </div>
           <div className='question-text'>
            {questions[currentQuestion].questionText}
           </div>
        </div>
        <div className='answer-section'>
            {questions[currentQuestion].answerOption.map((ans, i)=>{
         return  <button key={i} onClick={()=>handleAnswer(ans.isCorrect)} className='my-1' style={{fontSize:13}}>{ans.answerText}</button>
            })}
          <div className='action d-flex'>
            <button>Quit</button>
            <button onClick={handleNext}>Next</button>
        </div>
        </div>
        </>
}
     </div>
    </>
  )
}
