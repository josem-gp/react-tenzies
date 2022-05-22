import "./App.css";
import Die from "./components/Die";

function App() {
  return (
    <main>
      <div className="dice-container">
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
      </div>
    </main>
  );
}

export default App;
