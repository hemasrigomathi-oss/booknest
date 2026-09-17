const express = require("express");

const router = express.Router();

const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookcontroller");

// CREATE
router.post("/", createBook);

// GET ALL
router.get("/", getBooks);

// GET ONE
router.get("/:id", getBookById);

// UPDATE
router.put("/:id", updateBook);

// DELETE
router.delete("/:id", deleteBook);

module.exports = router;