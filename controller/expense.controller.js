const Expense = require("../model/expense.model");

/**
 * Handles the retrieval of all users from the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function handleGetAllExpenses(req, res) {
  const allDbExpenses = await Expense.find({});
  return res.status(200).json(allDbExpenses);
}

/**
 * Handles the retrieval of a user by their ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function handleGetExpenseById(req, res) {
  const expense = await Expense.findById(req.params.id);
  if (!expense) return res.status(404).json({ msg: "Expense not found" });
  return res.json(expense);
}

/**
 * Handles the update of a user by their ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function handleUpdateExpenseById(req, res) {
  await Expense.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
  return res.status(201).json({ status: "success" });
}

/**
 * Handles the deletion of a user by their ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function handleDeleteExpenseById(req, res) {
  await Expense.findByIdAndDelete(req.params.id);
  return res.status(200).json({ msg: "success" });
}

/**
 * Handles the creation of a new user.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function handleCreateAllExpense(req, res) {
  const body = req.body;

  // Validate required fields
  if (
    !body ||
    
    !body.category ||
    !body.amount ||
    !body. description 
    
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const result = await Expense.create({
    Date: body.Date,
    category: body.category,
    amount: body.amount,
    description: body. description,
   
  });

  return res.status(201).json({ msg: "success", id: result._id });
}

module.exports = {
  handleGetAllExpenses,
  handleGetExpenseById,
  handleUpdateExpenseById,
  handleDeleteExpenseById,
  handleCreateAllExpense,
};
