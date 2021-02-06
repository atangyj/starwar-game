import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { distributeCards } from 'actionCreators';

import Deck from 'components/Deck';

const Game = () => {
  const dispatch = useDispatch();

  const diceOutcome = useSelector((state) => state.diceOutcome);
  const cardDecks = useSelector((state) => state.cardDecks);
  console.log(diceOutcome, cardDecks);
  return (
    <div>
      <button type="button" onClick={() => dispatch(distributeCards())}>
        Toss Dice
      </button>
      <Deck cards={cardDecks.cardsOfPlayer} />
    </div>
  );
};

export default Game;
