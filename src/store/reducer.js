import { ADD_CARD_SUCCESS, ADD_CARD_FAILURE, CURRENT_CARD } from './actionTypes';

const initialState = {
  cards: [],
  error: null,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_SUCCESS:
      return {
        ...state,
        cards: [...state.cards, action.payload],
        error: null,
      };
    case ADD_CARD_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case CURRENT_CARD :
      return {
        ...state,
        currentCard: action.payload,
      }
      
    default:
      return state;
  }
};

export default cardReducer;
