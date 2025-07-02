import CardGrid from "./CardGrid";
import GameHeader from "./GameHeader";

// TODO : Generate the random list of pokemon only the first time the app is loaded
// Save this into an object to be passed to other components

function App() {
  return (
    <div className="p-4">
      <GameHeader />
      <CardGrid></CardGrid>
    </div>
  )
}

export default App;
