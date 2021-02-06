import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { distributeCards, selectCard } from 'actionCreators';

import Deck from 'components/Deck';

const Game = () => {
  const dispatch = useDispatch();

  const isPhaseStarted = useSelector((state) => state.isPhaseStarted);
  const diceOutcome = useSelector((state) => state.diceOutcome);
  const cardDecks = useSelector((state) => state.cardDecks);
  const scoreOfPlayer = useSelector((state) => state.scoreOfPlayer);
  const scoreOfComputer = useSelector((state) => state.scoreOfComputer);

  const onClickCard = (cardDecks, competeWith) => (i) =>
    dispatch(selectCard(i, cardDecks, competeWith));

  const calculateWinner = (scoreOfPlayer, scoreOfComputer) => {
    if (scoreOfPlayer <= 0 || scoreOfComputer <= 0) {
      let winner = scoreOfPlayer > scoreOfComputer ? 'Player' : 'Computer';
      return winner;
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(distributeCards())}
        disabled={isPhaseStarted}
      >
        {isPhaseStarted ? `Compete with ${diceOutcome.label}` : 'Toss dice'}
      </button>
      <h1>Winner: {calculateWinner(scoreOfPlayer, scoreOfComputer)}</h1>
      <h2>player: {scoreOfPlayer}</h2>
      <h2>computer: {scoreOfComputer}</h2>
      <Deck
        cards={cardDecks.cardsOfPlayer}
        selectCard={onClickCard(cardDecks, diceOutcome.value)}
        disableSelect={!isPhaseStarted}
      />
    </div>
  );
};

export default Game;
