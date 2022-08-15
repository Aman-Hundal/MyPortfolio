import './App.css';
import GameIndex from './components/weeklyGame/GameIndex';
import useAppData from './hooks/useAppData';

function App() {
  const {
    gameState,
    movieState,
    loading,
    submitAnswer,
    objToArrConversion,
    gameOverCheck,
    focusField,
    formatAnswerArr
  } = useAppData();

  console.log(gameState)

  return (
    <>
      {!loading ?
        <div className="App">
          <h1 className="title">filmdle</h1>
          <GameIndex
            focusField={focusField}
            isCorrect={gameState.isCorrect}
            objToArrConversion={objToArrConversion}
            formatAnswerArr={formatAnswerArr}
            gameOverCheck={gameOverCheck}
            guessCount={gameState.guessCount}
            movieData={movieState}
            guessesArray={gameState.guessesArray}
            submitAnswer={submitAnswer}
            answer={movieState.title}
            gameOver={gameState.gameOver}
            guessCounter={gameState.guessCount} />
          {gameState.gameOver || gameState.isCorrect ? <p className="goodbye">The movie was <strong>{movieState.title.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")}</strong>. Please join again next week.</p> : null}
        </div> :
        null}
    </>
  );
}

export default App;
