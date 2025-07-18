function GameHeader({score, highScore}) {
  return (
    <div className="flex justify-between mb-6 px-4">
      <div className="title mr-2">
        <h1 className="text-3xl font-bold mb-4">Pokémon Memory Game</h1>
        <p>Get points by clicking on an image, but don't click the same one more than once!</p>
      </div>
      <div className="score">
        <p className="mb-4 text-xl">Score: {score}</p>
        <p className="text-xl">High Score: {highScore}</p>
      </div>
    </div>
  )
}

export default GameHeader;
