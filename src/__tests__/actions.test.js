import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionCreators from 'actionCreators';
import * as api from 'api';
import * as types from 'types';
import * as helpers from 'helpers';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('distributeCards should dispatch actions', async () => {
  // arrange
  const mockDiceOutcome = { label: 'people', value: 'mass' };
  helpers.randomSample = jest.fn(() => mockDiceOutcome);

  const mockCardsOfPlayer = [1, 2, 3];
  const mockCardsOfComputer = [4, 5, 6];
  helpers.randomSampleWithoutReplacement = jest.fn();
  helpers.randomSampleWithoutReplacement
    .mockReturnValueOnce(mockCardsOfPlayer)
    .mockReturnValueOnce(mockCardsOfComputer);

  const expectedActions = [
    {
      type: types.SET_DICE_OUTCOME,
      diceOutcome: mockDiceOutcome,
    },
    {
      type: types.SET_CARD_DECKS,
      cardDecks: {
        cardsOfPlayer: mockCardsOfPlayer,
        cardsOfComputer: mockCardsOfComputer,
      },
    },
  ];

  api.fetchSWRoleData = jest.fn(() => {
    return new Promise((resolve, reject) => {
      return resolve([{ name: 'mock starwar role' }]);
    });
  });

  const store = mockStore({});

  // action
  await store.dispatch(actionCreators.distributeCards());

  // assert
  expect(store.getActions()).toEqual(expectedActions);
  expect(api.fetchSWRoleData).toHaveBeenCalled();
});

it('selectCard should dispatch actions', async () => {
  // arrange
  const store = mockStore({});
  const mockCardDecks = {
    cardsOfPlayer: [{ power: 100000 }],
    cardsOfComputer: [{ power: 1000 }],
  };
  const mockSelectedCards = {
    selectedCardOfPlayer: mockCardDecks.cardsOfPlayer[0],
    selectedCardOfComputer: mockCardDecks.cardsOfComputer[0],
  };
  const expectedActions = [
    { type: types.SET_SELECTED_CARD_SET, cardSet: mockSelectedCards },
    {
      type: types.SET_GAME_SCORES,
      lostScoreOfPlayer: 0,
      lostScoreOfComputer: -9,
    },
    { type: types.RESET_GAME_PHASE },
  ];

  // action
  await store.dispatch(actionCreators.selectCard(0, mockCardDecks, 'power'));

  // assert
  expect(store.getActions()).toEqual(expectedActions);
});
