const Dice = ({ diceLabel, handleClickDice, isPhaseStarted }) => {
  return (
    <button
      type="button"
      onClick={() => dispatch(distributeCards())}
      disabled={isPhaseStarted}
    >
      {isPhaseStarted ? `Compete with ${diceOutcome.label}` : 'Toss dice'}
    </button>
  );
};

export default Dice;
