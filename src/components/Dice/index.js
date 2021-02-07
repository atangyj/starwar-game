const Dice = ({ diceLabel, handleClickDice, isPhaseStarted }) => {
  return (
    <button type="button" onClick={handleClickDice} disabled={isPhaseStarted}>
      {isPhaseStarted ? `Compete with ${diceLabel}` : 'Toss dice'}
    </button>
  );
};

export default Dice;
