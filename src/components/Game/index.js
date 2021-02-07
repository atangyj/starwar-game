import React, { useDebugValue } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { distributeCards, selectCard } from 'actionCreators';

import Deck from 'components/Deck';
import Dice from 'components/Dice';

const Game = () => {
  const dispatch = useDispatch();

  const isPhaseStarted = useSelector((state) => state.isPhaseStarted);
  const diceOutcome = useSelector((state) => state.diceOutcome);
  const cardDecks = useSelector((state) => state.cardDecks);
  const selectedCardSet = useSelector((state) => state.selectedCardSet);
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

  console.log(selectedCardSet);

  return (
    <div>
      {/* <h1>Winner: {calculateWinner(scoreOfPlayer, scoreOfComputer)}</h1> */}
      <div className="text-white bg-dark" style={{ height: '60px' }}>
        <p style={{ lineHeight: '60px' }}>
          {selectedCardSet
            ? `HISTORY ${selectedCardSet.selectedCardOfPlayer.name} vs ${selectedCardSet.selectedCardOfComputer.name}`
            : 'War between the bright and the dark begins. More power you own, more attack you underwent.'}
        </p>
      </div>
      <div
        className="d-flex flex-column text-center m-4"
        style={{ height: '90vh' }}
      >
        <div className="flex-grow-1">
          <Deck
            label={`COMPUTER ${scoreOfComputer}`}
            value={scoreOfComputer}
            cards={cardDecks.cardsOfComputer}
            selectCard={onClickCard(cardDecks, diceOutcome.value)}
            invisible
          />
        </div>

        <div className="flex-grow-1">
          <Dice
            diceLabel={diceOutcome.label}
            isPhaseStarted={isPhaseStarted}
            handleClickDice={() => dispatch(distributeCards())}
          />
        </div>

        <div className="flex-grow-1">
          <Deck
            label={`PLAYER ${scoreOfPlayer}`}
            value={scoreOfPlayer}
            cards={cardDecks.cardsOfPlayer}
            selectCard={onClickCard(cardDecks, diceOutcome.value)}
            invisible={!isPhaseStarted}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
