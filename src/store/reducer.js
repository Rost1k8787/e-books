import { ADD_CARD,  CURRENT_CARD, RENDER_CARD, DELETE_CARD, UPDATE_CARD } from './actionTypes';

const initialState = {
  cards: [],
  cardData : [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cardData: [...state.cardData, action.payload],
      };
    case CURRENT_CARD :
      return {
        ...state,
        currentCard: action.payload,
      }
    case RENDER_CARD : 
    return {
      ...state,
      cardData : action.payload
    }
    case DELETE_CARD:
    return {
    ...state,
    cardData: state.cardData.filter(item => item._id !== action.payload)
    };
    case UPDATE_CARD :
     return {
     ...state,
     cardData: state.cardData.map(item =>
     item._id === action.payload._id
      ? { ...item, ...action.payload }
      : item
  )
};
    default:
      return state;
  }
};

export default cardReducer;
