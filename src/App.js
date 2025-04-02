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
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    let userResult = judgement(choice[userChoice], computerChoice);
    setResult(userResult);

    let compResult =
      userResult === "WIN" ? "LOSE" : userResult === "LOSE" ? "WIN" : "TIE";
    setComputerResult(compResult);
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "TIE";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "WIN" : "LOSE";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "WIN" : "LOSE";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "WIN" : "LOSE";
    }
    // user === computer -> tie
    // user === rock, computer === paper -> user win
    // user === rock, computer === scissors -> user lose
    // user === paper, computer === rock -> user win
    // user === paper, computer === scissors -> user lose
    // user === scissors, computer === rock -> user lose
    // user === scissors, computer === paper -> user win
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let selectedItem = itemArray[randomItem];
    return choice[selectedItem];
  };

  return (
    <div className="main-container">
      <div className="box-containers">
        <Box title="You" result={result} item={userSelect} />
        <Box title="Computer" result={computerResult} item={computerSelect} />
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
