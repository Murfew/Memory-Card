function GameHeader({score, highScore}) {
  return (
    <div className="flex justify-between">
      <div className="title">
        <h1>Pokémon Memory Game</h1>
        <p>Get points by clicking on an image, but don't click the same one more than once!</p>
      </div>
      <div className="score">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  )
}

export default GameHeader;
