import { useEffect, useState } from "react";
import CardGrid from "./CardGrid";
import GameHeader from "./GameHeader";


function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [wrongCardId, setWrongCardId] = useState(null);

  useEffect(() => {
    // Generate a unique set of 16 random IDs
    const uniqueIds = new Set();
    while (uniqueIds.size < 15) {
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
        const modifiedResults = results.map(pokemon => ({
          ...pokemon, clicked: false,
        }));

        setData(modifiedResults);
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
      // Update high score
      if (score > highScore) {setHighScore(score)};

      // Trigger wrong answer effect
      setWrongCardId(index);

      // Clear effect after 500ms
      setTimeout(() => setWrongCardId(null), 500)

      // Reset score
      setScore(0);

      // Reset all cards
      const resetData = data.map(pokemon => ({...pokemon, clicked: false}))

      // Update and shuffle
      setData(shuffleArray(resetData));

    } else {
      // Increment score
      setScore(score + 1);

      // Set clicked
      const updatedData = data.map((pokemon, i) =>
        i === index ? {...pokemon, clicked: true} : pokemon
      );

      // Update and shuffle
      setData(shuffleArray(updatedData));
    }
  }

  return (
    <div className="bg-[#1E1E2F] text-white p-6 min-h-screen h-fit">
      <GameHeader score={score} highScore={highScore}/>
      <CardGrid pkmn={data} handleCardClick={handleCardClick} wrongCardId={wrongCardId} />
    </div>
  )
}

export default App;
