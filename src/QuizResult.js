import React from 'react'
import questions from './QuizData'

export default function QuizResult(props) {
  return (
    <div className='score-section text-center'>
        <h2>Complete!</h2>
        <h4>Total Score {props.score} / 20</h4>
        <h4>Your Correct Answer {props.correctAns} Out of  {questions.length}</h4>
        <div className='text-center d-flex justify-content-center align-items-center'>
        <button className='w-50 d-flex justify-content-center'>Play Again</button>
        </div>

    </div>
  )
}
