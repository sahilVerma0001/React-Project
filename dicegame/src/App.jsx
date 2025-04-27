import Startgame from "./components/Startgame"
import './App.css'
import { useState } from "react"
import Gameplay from "./components/Gameplay";
function App() {
  const [gamestarted, setGamestarted] = useState(false);

  const toggleGamePlay = () => {
    setGamestarted((prev) => !prev);
  }
  return (
    <>
      {gamestarted ? <Gameplay toggle={toggleGamePlay}/> : <Startgame toggle={toggleGamePlay} />}
    </>
  )
}

export default App
