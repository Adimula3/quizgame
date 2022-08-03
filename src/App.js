
import './App.css';
import {useState} from "react";
import MainMenu from "./component/mainMenu";
import Quiz from "./component/quiz";
import EndScreen from "./component/endScreen";
import QuizContext from "./helpers/context";
function App() {
    const [gameState, setGameState] = useState('menu');
    const [score, setScore] = useState(0)

  return (
    <div className="App">
      <h1>Quiz App</h1>
        <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
            {gameState === 'menu' && <MainMenu /> }
            {gameState === 'quiz' && <Quiz />}
            {gameState === 'endScreen' && <EndScreen />}
        </QuizContext.Provider>

    </div>
  );
}

export default App;
