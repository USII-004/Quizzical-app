import React, { useState, useEffect } from "react";
import Welcome from "./components/Welcome";
import { nanoid } from "nanoid";
import Quiz from "./components/Quiz";
import Question from "./components/Question";

function App() {
  const [startQuiz, setStartQuiz] = useState(false)
  const [count, setCount] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [checked, setChecked] = useState(false)
  const [randomQuestion, setRandomQuestion] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5)

  useEffect(() => {
    async function getQuestions() {
      try {
        const res = await fetch("https://opentdb.com/api.php?amount=10&category=20");
        const data = await res.json();
        let q = []
        data.results.forEach(element => {
          q.push({
            id: nanoid(), 
            question: element.question, 
            correct: element.correct_answer, 
            selected: null, 
            checked: false, 
            answers: shuffleArray([...element.incorrect_answers, element.correct_answer])})
        });
        setRandomQuestion(q);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setIsLoading(false);
      }
    }

    getQuestions()

  }, [count]);


  function handleCheck() {
    let selected = true
    randomQuestion.forEach(element => {
      if(element.selected === null) {
        selected = false
        return
      }
    })
    if(!selected) {
      return
    }
    setRandomQuestion(questions => questions.map(element => {
      return {...element, checked:true}
    }))
    setChecked(true)
    let correct = 0
    randomQuestion.forEach(element => {
      if(element.correct === element.selected) {
        correct +=1
      }
    })
    setCorrect(correct)
  }


  function handleClickAnswer(id, answer) {
    setRandomQuestion(questions => questions.map(element => {
      return element.id === id ? {...element, selected:answer} : element
    }))
  }


  function handlePlayAgain() {
    setCount(count = count + 1)
    setChecked(false)
  }

  const randomQuestionElement = randomQuestion ? randomQuestion.map(element => {
    return (
      <Question 
        key = {element.id}
        q = {element}
        handleClickAnswer = {handleClickAnswer}
        id = {element.id}
      />
    )
  }) : []


  function handleStartQuiz() {
    setStartQuiz(true);
  }

  return (
    <div>
      { startQuiz ? 
        <Quiz 
          questionElement = {randomQuestionElement}
          checked = {checked}
          handleCheck = {handleCheck}
          correct = {correct}
          isLoading = {isLoading}
          handlePlayAgain = {handlePlayAgain}
        />
        :
        <Welcome 
          handleStartQuizBtnPress = {handleStartQuiz}
        />  
      }
    </div>
  )
}

export default App;
