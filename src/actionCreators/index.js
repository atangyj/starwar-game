import { DISTRIBUTE_CARDS, SET_DICE_OUTCOME, SET_CARD_DECKS } from 'types';
import { fetchSWRoleData } from 'api';
import { randomSample, randomSampleWithoutReplacement } from 'helpers';

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
