import React from "react";
import QuizContext from "../helpers/context";
import {useContext} from "react";
import Questions from "../helpers/questionBank";
const EndScreen = () => {

    const {score, setGameState} = useContext(QuizContext)
  return (
      <div>
          <h1>Finished Quiz</h1>
          <h3>{score} / {Questions.length}</h3>
          <button onClick={() => setGameState('menu')}>Restart Quiz</button>
      </div>
  )
}

export default EndScreen;
