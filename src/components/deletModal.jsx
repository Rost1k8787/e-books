import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from 'axios';

function DeleteConfirmationModal({ isOpen, closeModal, id}) {
  console.log(id);
  
  const dispatch = useDispatch();
  const currentCard = useSelector(state=> state.currentCard)

  const handleDelete = async (_id, closeModal) => {
    console.log(currentCard);
  try {
    const response = await axios.delete(`https://booksback.vercel.app/api/books/${_id}`);
    closeModal();
    return response.data;
  } catch (error) {
    console.error("Error deleting the product:", error);
    throw error;
  }
};


  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="delete-confirmation-modal"
      aria-describedby="delete-confirmation-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          textAlign: 'center',
        }}
      >
        <h2 id="delete-confirmation-modal">Delete Confirmation</h2>
        <p id="delete-confirmation-description">Are you sure you want to delete this product?</p>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
         <Button variant="outlined" onClick={() => handleDelete(id)}>
          Delete
         </Button>
          <Button variant="outlined" onClick={closeModal}>Cancel</Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default DeleteConfirmationModal;
