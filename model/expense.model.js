const { default: mongoose } = require("mongoose");

// schema
const userSchema = new mongoose.Schema(
  {
    
    category: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
     
    },
    description: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const Expense = mongoose.model("expense", userSchema);

module.exports = Expense;
