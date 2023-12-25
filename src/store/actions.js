import { ADD_CARD,  CURRENT_CARD, RENDER_CARD, DELETE_CARD, UPDATE_CARD } from './actionTypes';


export const addCard = (card) => ({
  type : ADD_CARD, 
  payload : card
});

export const currentCard = (id) => ({
  type: CURRENT_CARD,
  payload : id
});

export const renderCard = (cardData) =>({
   type: RENDER_CARD,
   payload : cardData
});

export const deleteCard = (id) => ({
  type : DELETE_CARD,
  payload : id
});

export const updateCard = (updatedCard) => ({
  type : UPDATE_CARD,
  payload : updatedCard
});
