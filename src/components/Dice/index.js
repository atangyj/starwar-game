import { useState } from 'react';
import './Dice.css';

const Dice = ({ diceLabel, handleClickDice, isPhaseStarted }) => {
  const [animate, setAnimate] = useState(false);
  const tossDice = () => {
    setAnimate(true);
    setTimeout(handleClickDice, 1000);
  };
  return (
    <button
      type="button"
      onClick={tossDice}
      disabled={isPhaseStarted}
      style={{ width: '100px', height: '100px' }}
      className={`rounded-lg dice ${animate && 'spin'}`}
    >
      {isPhaseStarted ? `${diceLabel}` : 'Toss Dice'}
    </button>
  );
};

export default Dice;
