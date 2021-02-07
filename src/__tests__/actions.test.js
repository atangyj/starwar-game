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
