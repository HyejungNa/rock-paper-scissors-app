import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: { name: "Rock", img: "/images/hand-rock.svg" },
  paper: { name: "Paper", img: "/images/hand-paper.svg" },
  scissors: { name: "Scissors", img: "/images/hand-scissors.svg" },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div className="main-container">
      <div className="box-containers">
        <Box title="You" result="User result" item={userSelect} />
        <Box title="Computer" result="Computer result" />
      </div>
      <div>
        <h1 className="button-title">Choose your move</h1>
        <div className="rock-paper-scissors-btn">
          <button onClick={() => play("rock")}>
            <img src="/images/hand-rock.svg" alt="hand-rock-img"></img>
            <div>Rock</div>
          </button>
          <button onClick={() => play("paper")}>
            <img src="/images/hand-paper.svg" alt="hand-paper-img"></img>
            <div>Paper</div>
          </button>
          <button onClick={() => play("scissors")}>
            <img src="/images/hand-scissors.svg" alt="hand-scissors-img"></img>
            <div>Scissors</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
