import { useEffect, useState } from "react";
import CardGrid from "./CardGrid";
import GameHeader from "./GameHeader";

// TODO : Generate the random list of pokemon only the first time the app is loaded
// Save this into an object to be passed to other components

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
        setData(results);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchAll();
  }, []);


  return (
    <div className="p-4">
      <GameHeader score={score} highScore={highScore}/>
      <CardGrid pkmn={data}/>
    </div>
  )
}

export default App;
