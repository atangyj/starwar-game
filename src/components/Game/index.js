import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { distributeCards, selectCard } from 'actionCreators';

import Deck from 'components/Deck';
import Dice from 'components/Dice';

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
    <div className="vh-100 d-flex flex-column">
      {/* <h1>Winner: {calculateWinner(scoreOfPlayer, scoreOfComputer)}</h1> */}

      <div className="flex-grow-1">
        <Deck
          title={`Player : ${scoreOfPlayer}`}
          cards={cardDecks.cardsOfPlayer}
          selectCard={onClickCard(cardDecks, diceOutcome.value)}
          disableSelect={!isPhaseStarted}
        />
      </div>

      <div className="flex-grow-1">
        <Dice
          diceLable={diceOutcome.label}
          isPhaseStarted={isPhaseStarted}
          handleClickDice={() => dispatch(distributeCards())}
        />
      </div>

      <div className="flex-grow-1">
        <Deck
          title={`Computer : ${scoreOfComputer}`}
          cards={cardDecks.cardsOfPlayer}
          selectCard={onClickCard(cardDecks, diceOutcome.value)}
          disableSelect={!isPhaseStarted}
        />
      </div>
    </div>
  );
};

export default Game;
