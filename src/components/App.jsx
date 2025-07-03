import { useEffect, useState } from "react";
import CardGrid from "./CardGrid";
import GameHeader from "./GameHeader";

// TODO: Add the styling for the app

function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    // Generate a unique set of 16 random IDs
    const uniqueIds = new Set();
    while (uniqueIds.size < 16) {
      uniqueIds.add(Math.floor(Math.random() * 1025 + 1));
    }

    const fetchAll = async () => {
      try {
        const results = await Promise.all(
          Array.from(uniqueIds).map(async (id) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
          })
        );

        // Add clicked field
        const resultsWithClicked = results.map(pokemon => ({
          ...pokemon, clicked: false,
        }));

        setData(resultsWithClicked);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchAll();
  }, []);

  // Shuffle array using Fisher-Yates shuffle
  function shuffleArray(array) {
    let copy = JSON.parse(JSON.stringify(array))
    let currentIndex = copy.length, randomIndex;

    // While there are elements to shuffle
    while (currentIndex !== 0) {
      // Pick element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Swap with current element
      [copy[currentIndex], copy[randomIndex]] = [copy[randomIndex], copy[currentIndex]];

    }

    return copy
  }


  function handleCardClick(index) {
    const card = data.at(index);
    if (card.clicked) {
      // Reset score
      setScore(0);

      // Reset all cards
      const resetData = data.map(pokemon => ({...pokemon, clicked: false}))
      setData(resetData);

    } else {
      // Update high score
      if (score > highScore) {setHighScore(score)};
      // Increment score
      setScore(score + 1);

      // Set clicked
      const updatedData = data.map((pokemon, i) => {
        i === index ? {...pokemon, clicked: true} : pokemon
      });
      setData(updatedData);
    }

    // Shuffle cards
    setData(shuffleArray(data))
  }

  return (
    <div className="p-4">
      <GameHeader score={score} highScore={highScore}/>
      <CardGrid pkmn={data} handleCardClick={handleCardClick}/>
    </div>
  )
}

export default App;
