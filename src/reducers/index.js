import {
  SET_DICE_OUTCOME,
  SET_CARD_DECKS,
  SET_SELECTED_CARD_SET,
  SET_GAME_SCORES,
  RESET_GAME_PHASE,
} from 'types';

const cardDeckInterface = {};
const defaultCardDeck = [0, 0, 0].fill(cardDeckInterface);

const reducer = (
  state = {
    isPhaseStarted: false,
    diceOutcome: '',
    cardDecks: { cardsOfPlayer: [], cardsOfComputer: [] },
    scoreOfPlayer: 100,
    scoreOfComputer: 100,
  },
  action
) => {
  switch (action.type) {
    case SET_DICE_OUTCOME: {
      return {
        ...state,
        diceOutcome: action.diceOutcome,
        isPhaseStarted: true,
      };
    }

    case SET_CARD_DECKS: {
      return { ...state, cardDecks: action.cardDecks };
    }

    case SET_SELECTED_CARD_SET: {
      return { ...state, selectedCardSet: action.cardSet };
    }

    case SET_GAME_SCORES: {
      const { scoreOfPlayer, scoreOfComputer } = { ...state };
      const newScoreOfPlayer = scoreOfPlayer + action.lostScoreOfPlayer;
      const newScoreOfComputer = scoreOfComputer + action.lostScoreOfComputer;
      return {
        ...state,
        scoreOfPlayer: newScoreOfPlayer,
        scoreOfComputer: newScoreOfComputer,
      };
    }

    case RESET_GAME_PHASE: {
      const defaultPhaseStatus = {
        isPhaseStarted: false,
        diceOutcome: '',
        cardDecks: {
          cardsOfPlayer: defaultCardDeck,
          cardsOfComputer: defaultCardDeck,
        },
      };
      return { ...state, ...defaultPhaseStatus };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
