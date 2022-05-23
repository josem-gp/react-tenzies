function Die(props) {
  return (
    <div
      className="die-face"
      onClick={props.holdDice}
      style={{ backgroundColor: props.isHeld ? "#59E391" : "white" }}
    >
      <h2 className="die-num">{props.number}</h2>
    </div>
  );
}

export default Die;
