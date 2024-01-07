import React from "react";
import Welcome from "./components/Welcome";
import Questions from "./components/Questions";

function App() {
  const [startQuiz, setStartQuiz] = React.useState(false);

  const [randomQuestion, setRandomQuestion] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function getQuestions() {
      try {
        const res = await fetch("https://opentdb.com/api.php?amount=10&category=20");
        const data = await res.json();

        setRandomQuestion(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setIsLoading(false);
      }
    }

    // Delay the API call by 5 seconds
    const timerId = setTimeout(() => {
      getQuestions();
    }, 5000);

    // Clear the timer to avoid calling the API if the component unmounts
    return () => clearTimeout(timerId);
  }, []);

  function handleStartQuiz() {
    setStartQuiz(true);
  }

  if (startQuiz === false) {
    return(
      <Welcome 
        handleStartQuizBtnPress = {handleStartQuiz}
      />
    )
  } else {
    return (
      <Questions 
        questionsLoading = {isLoading}
        questionsArray = {randomQuestion}
      />
    )
  }
}

export default App;
