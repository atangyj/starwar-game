import {
  DISTRIBUTE_CARDS,
  SET_DICE_OUTCOME,
  SET_CARD_DECKS,
  SET_SELECTED_CARD_SET,
  SET_GAME_SCORES,
  RESET_GAME_PHASE,
} from 'types';
import { fetchSWRoleData } from 'api';
import {
  randomSample,
  randomSampleWithoutReplacement,
  autoSelect,
  calculateLostScores,
} from 'helpers';

const DICE = [
  { label: 'people', value: 'mass' },
  { label: 'starships', value: 'cargo_capacity' },
  { label: 'vehicles', value: 'max_atmosphering_speed' },
];

const NUM_OF_CARDS = 3;

export const setDiceOutcome = (diceOutcome) => {
  return {
    type: SET_DICE_OUTCOME,
    diceOutcome,
  };
};

export const setCardDecks = (cardDecks) => {
  return {
    type: SET_CARD_DECKS,
    cardDecks,
  };
};

export const distributeCards = () => {
  return async (dispatch) => {
    const diceOutcome = randomSample(DICE);
    const SWRoleData = await fetchSWRoleData(diceOutcome.label);
    const cardsOfPlayer = randomSampleWithoutReplacement(
      NUM_OF_CARDS,
      SWRoleData
    );
    const cardsOfComputer = randomSampleWithoutReplacement(
      NUM_OF_CARDS,
      SWRoleData
    );

    dispatch(setDiceOutcome(diceOutcome));
    dispatch(setCardDecks({ cardsOfPlayer, cardsOfComputer }));
  };
};

export const setSelectedCardSet = (cardSet) => {
  return {
    type: SET_SELECTED_CARD_SET,
    cardSet,
  };
};

export const setGameScores = (lostScores) => {
  return {
    type: SET_GAME_SCORES,
    ...lostScores,
  };
};

export const resetGamePhase = () => {
  return {
    type: RESET_GAME_PHASE,
  };
};

export const selectCard = (i, cardDecks, competeWith) => {
  return (dispatch) => {
    // handle select card
    const selectedCardOfPlayer = cardDecks.cardsOfPlayer[i];
    const selectedCardOfComputer = autoSelect(cardDecks.cardsOfComputer);
    dispatch(
      setSelectedCardSet({ selectedCardOfPlayer, selectedCardOfComputer })
    );

    // calculate lost scores
    const [lostScoreOfPlayer, lostScoreOfComputer] = calculateLostScores(
      selectedCardOfPlayer,
      selectedCardOfComputer,
      competeWith
    );
    dispatch(setGameScores({ lostScoreOfPlayer, lostScoreOfComputer }));

    // calculate winner
    // reset phase
    dispatch(resetGamePhase());
  };
};
