import { SET_DICE_OUTCOME, SET_CARD_DECKS } from 'types';

const reducer = (
  state = { diceOutcome: '', cardDecks: { player: [], computer: [] } },
  action
) => {
  switch (action.type) {
    case SET_DICE_OUTCOME: {
      return { ...state, diceOutcome: action.diceOutcome };
    }

    case SET_CARD_DECKS: {
      return { ...state, cardDecks: action.cardDecks };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
