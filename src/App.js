import React from "react";
import Welcome from "./components/Welcome";
import Questions from "./components/Questions";

function App() {
  const [startQuiz, setStartQuiz] = React.useState(false);

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
      <Questions />
    )
  }
}

export default App;
