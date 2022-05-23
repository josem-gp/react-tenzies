import "./App.css";
import Die from "./components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [allNewDice, setAllNewDice] = useState(newDice());

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function newDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function holdDice(id) {
    setAllNewDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function mappedNewDice() {
    return allNewDice.map((die) => {
      return (
        <Die
          key={die.id}
          number={die.value}
          isHeld={die.isHeld}
          holdDice={() => {
            holdDice(die.id);
          }}
        />
      );
    });
  }

  function handleClick() {
    setAllNewDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{mappedNewDice()}</div>
      <button className="roll-dice" onClick={handleClick}>
        Click
      </button>
    </main>
  );
}

export default App;
