const express = require("express");

// Import user controller functions
const {
  handleGetAllExpenses,
  handleGetExpenseById,
  handleUpdateExpenseById,
  handleDeleteExpenseById,
  handleCreateAllExpense,
} = require("../controller/expense.controller");

// Create an Express router
const router = express.Router();

// Route to handle GET (retrieve all users) and POST (create user) requests
router
  .route("/")
  .get(handleGetAllExpenses) // Retrieve all users
  .post(handleCreateAllExpense); // Create a new user

// Route to handle GET (retrieve user by ID), PATCH (update user by ID), and DELETE (delete user by ID) requests
router
  .route("/:id")
  .get(handleGetExpenseById) // Retrieve user by ID
  .patch(handleUpdateExpenseById) // Update user by ID
  .delete(handleDeleteExpenseById); // Delete user by ID

// Export the router for use in other modules
module.exports = router;
