import React from 'react'
import { nanoid } from 'nanoid'

const Question = (props) => {

  let answers = props.q.answers

  function handleClick(answer) {
    if(props.q.checked) {
      return
    }
    props.handleClickAnswer(props.id, answer)
  }

  const answersElement = answers.map(element => {
    let id = null
    if (props.q.checked) {
      if(props.q.correct === element) {
        id = 'correct'
      }
      else if (props.q.selected === element) {
        id = 'incorrect'
      }
      else {
        id = 'not-selected'
      }
    }
    return (
      <button 
        key = {nanoid()}
        onClick = {handleClick(element)}
        className = {`text-[.6rem] border-[#293264] border flex rounded-md mx-2 p-2 text-[#293264] whitespace-nowrap ${element === props.q.selected ? 'bg-[#D6DBF5]' : 'bg-transparent'}`}
      >
        {element}
      </button>
    )
  })

  return (
    <div className='my-4 border-b-2 py-4'>
      <h2 
        className='font-[700] text-[#293264] text-[1rem] px-2 md:px-4'
      >
        {props.q.question}
      </h2>
      <div className='md:flex'>
        {answersElement}
      </div>
    </div>
  )
}

export default Question