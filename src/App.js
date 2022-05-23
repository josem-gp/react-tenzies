import "./App.css";
import Die from "./components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [allNewDice, setAllNewDice] = useState(newDice());

  console.log(allNewDice);

  function newDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function holdDice(id) {
    console.log(id);
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
    setAllNewDice(newDice());
  }

  return (
    <main>
      <div className="dice-container">{mappedNewDice()}</div>
      <button className="roll-dice" onClick={handleClick}>
        Click
      </button>
    </main>
  );
}

export default App;
