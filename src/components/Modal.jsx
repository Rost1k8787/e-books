import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { modalStyle, inputStyle, btnFlex } from "../styles/modal";
import { addCardSuccess, addCardFailure } from '../store/actions';


function ChildModal({ isOpen, closeModal }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [author, setAuthor] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [titleValidation, setTitleValidation] = useState("");
  const [yearValidate, setYearValidate] = useState("");
  const [authorValidate, setAuthorValidate] = useState("");
  const [imgUrlValidate, setImgUrlValidate] = useState("");

  const dispatch = useDispatch();


  const validateTitle = (title) => {
    if (title.length < 2 || title.length > 56) {
      setTitleValidation("Title should be 2 to 56 characters");
      return false;
    }
    setTitleValidation("");
    return true;
  };

  const validateYear = (year) => {
    const currentYear = new Date().getFullYear();
    if (isNaN(year) || year < 1900 || year > currentYear) {
      setYearValidate("Invalid year")
      return false;
    }
    setYearValidate("")
    return true;
  };

  const validateAuthor = (author) => {
    if (author.length < 2 || author.length > 36) {
    setAuthorValidate("Title should be 2 to 36 characters");
      return false;
    }
    setAuthorValidate("");
    return true;
  };

  const validateImageURL = (url) => {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    setImgUrlValidate("Link is not valid")
    return false;
  }

  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"]; 
  const lowerCaseURL = url.toLowerCase();
  const isImage = imageExtensions.some((ext) => lowerCaseURL.endsWith(ext));

  return isImage; 
};

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setTitle(title);
    validateTitle(e.target.value);
  };

  const handleYearChange = (e) => {
    const year = e.target.value;
    setYear(year);
    validateYear(e.target.value);
  };

  const handleAuthorChange = (e) => {
    const author = e.target.value;
    setAuthor(author);
    validateAuthor(e.target.value);
  };

  const handleImgUrlChange = (e) => {
  const imgUrl = e.target.value;
  setImgUrl(imgUrl);
  validateImageURL(e.target.value);
};

const handleAddBook = async () => {
  if (validateTitle(title) && validateYear(year) && validateAuthor(author) && validateImageURL(imgUrl)) {
    try {
      const response = await axios.post('https://booksback.vercel.app/api/books', {
        title: title,
        year: parseInt(year),
        author: author,
        imgUrl: imgUrl
      });

      dispatch(addCardSuccess(response.data));
      closeModal();

      setTitle("");
      setYear("");
      setAuthor("");
      setImgUrl("");
      setTitleValidation("");
      setYearValidate("");
      setAuthorValidate("");
      setImgUrlValidate("");

    } catch (error) {
      dispatch(addCardFailure(error.message));
    }
  } else {
    console.error('Data validation failed.');
  }
};

  return (
    <Modal
      keepMounted
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box
      sx={{
      ...modalStyle,
    }}
>
  <Box
    sx={{
      ...inputStyle,
      borderBottom: titleValidation
        ? "1px solid red"
        : "1px solid #03141215",
      "&:hover": {
        borderBottom: titleValidation
          ? "1px solid red"
          : "1px solid #031412",
      },
    }}
  >
    <input
      type="text"
      placeholder="Title*"
      value={title}
      onChange={handleTitleChange}
      style={inputStyle}
    />
    {titleValidation && <span className="error-message">*</span>}
  </Box>
  <Box
    sx={{
      ...inputStyle,
      borderBottom: yearValidate
        ? "1px solid red"
        : "1px solid #03141215",
      "&:hover": {
        borderBottom: yearValidate
          ? "1px solid red"
          : "1px solid #031412",
      },
    }}
  >
    <input
      type="number"
      placeholder="Year*"
      value={year}
      onChange={handleYearChange}
      style={inputStyle}
    />
    { yearValidate && <span className="error-message">*</span>}
  </Box>
  <Box
    sx={{
      ...inputStyle,
      borderBottom: authorValidate
        ? "1px solid red"
        : "1px solid #03141215",
      "&:hover": {
        borderBottom: authorValidate
          ? "1px solid red"
          : "1px solid #031412",
      },
    }}
  >
    <input
      type="text"
      placeholder="Author*"
      value={author}
      onChange={handleAuthorChange}
      style={inputStyle}
    />
    {authorValidate && <span className="error-message">*</span>}
  </Box>
  <Box
    sx={{
      ...inputStyle,
      borderBottom: imgUrlValidate
        ? "1px solid red"
        : "1px solid #03141215",
      "&:hover": {
        borderBottom: imgUrlValidate
          ? "1px solid red"
          : "1px solid #031412",
      },
    }}
  >
    <input
      type="text"
      placeholder="Image Adress*"
      value={imgUrl}
      onChange={handleImgUrlChange}
      style={inputStyle}
    />
    {imgUrlValidate && <span className="error-message">*</span>}
  </Box>
  <Box
    sx={{
      ...btnFlex,
      justifyContent: "center",
      mt: 2,
      "& > button": {
        mx: 1,
      },
    }}
  >
    <Button variant="contained" onClick={handleAddBook}>
      Add Book
    </Button>
    <Button variant="contained" onClick={closeModal}>
      Exit
    </Button>
  </Box>
</Box>
    </Modal>
  );
}

export default ChildModal;
