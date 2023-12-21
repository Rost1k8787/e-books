import { ADD_CARD_SUCCESS, ADD_CARD_FAILURE, CURRENT_CARD, RENDER_CARD, DELETE_CARD } from './actionTypes';

export const addCardSuccess = (cardData) => ({
  type: ADD_CARD_SUCCESS,
  payload: cardData,
});

export const addCardFailure = (error) => ({
  type: ADD_CARD_FAILURE,
  payload: error,
});

export const currentCard = (id) => ({
  type: CURRENT_CARD,
  payload : id
});

export const renderCard = (cardData) =>({
   type: RENDER_CARD,
   payload : cardData
})

export const deleteCard = (id) => ({
  type : DELETE_CARD,
  payload : id
})
