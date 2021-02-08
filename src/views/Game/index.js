import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  distributeCards,
  selectCard,
  resetPhase,
  startGame,
  endGame,
  restartGame,
} from 'actionCreators';

import Deck from 'components/Deck';
import Dice from 'components/Dice';
import Button from 'components/Button';
import StartView from 'views/StarView';
import EndView from 'components/EndView';

const Game = () => {
  const dispatch = useDispatch();

  const isGameStarted = useSelector((state) => state.isGameStarted);
  const isGameOver = useSelector((state) => state.isGameOver);
  const isPhaseStarted = useSelector((state) => state.isPhaseStarted);
  const isStagedResultSaved = useSelector((state) => state.isStagedResultSaved);
  const diceOutcome = useSelector((state) => state.diceOutcome);
  const cardDecks = useSelector((state) => state.cardDecks);
  const selectedCardSet = useSelector((state) => state.selectedCardSet);
  const scoreOfPlayer = useSelector((state) => state.scoreOfPlayer);
  const scoreOfComputer = useSelector((state) => state.scoreOfComputer);

  const onClickCard = (cardDecks, competeWith) => (i) =>
    dispatch(selectCard(i, cardDecks, competeWith));

  const calculateWinner = (scoreOfPlayer, scoreOfComputer) => {
    let winner = '';
    if (scoreOfPlayer <= 0 || scoreOfComputer <= 0) {
      winner = scoreOfPlayer > scoreOfComputer ? 'Player' : 'Computer';
      return winner;
    }
    return winner;
  };

  const [winner, setWinner] = useState('');

  useEffect(() => {
    const winner = calculateWinner(scoreOfPlayer, scoreOfComputer);

    if (winner !== '') {
      dispatch(endGame());
      setWinner(winner);
    }
  });

  return (
    <div>
      <StartView
        isOpen={!isGameStarted}
        onClick={() => {
          dispatch(startGame());
        }}
      />
      <EndView
        isOpen={isGameOver}
        onClick={() => dispatch(restartGame())}
        winner={winner}
      />

      <div
        className="d-flex flex-column text-center m-4"
        style={{ height: '90vh' }}
      >
        <div className="flex-grow-1">
          <Deck
            label="COMPUTER"
            score={scoreOfComputer}
            cards={cardDecks.cardsOfComputer}
            selectCard={onClickCard(cardDecks, diceOutcome.value)}
            selectedCard={selectedCardSet.selectedCardOfComputer}
          />
        </div>

        <div className="flex-grow-1">
          {!isStagedResultSaved ? (
            <Dice
              diceLabel={diceOutcome.label}
              isPhaseStarted={isPhaseStarted}
              handleClickDice={() => dispatch(distributeCards())}
            />
          ) : (
            <Button
              label="KEEP FIGHTING"
              onClick={() => dispatch(resetPhase())}
            />
          )}
        </div>

        <div className="flex-grow-1">
          <Deck
            label="PLAYER"
            score={scoreOfPlayer}
            cards={cardDecks.cardsOfPlayer}
            selectCard={onClickCard(cardDecks, diceOutcome.value)}
            selectedCard={selectedCardSet.selectedCardOfPlayer}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
