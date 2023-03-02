import React, { useState } from "react";
import "./ExpenseModal.css";

const ExpenseModal = ({ handleClose }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the category and amount values, e.g. send them to the server

    // Clear the form inputs
    setCategory("");
    setAmount("");

    // Close the modal
    handleClose();
  };

  return (
    <div className="expense-modal">
      <div className="expense-modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Add Expense</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Category:
            <select value={category} onChange={handleCategoryChange}>
              <option value="">Select a category</option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Transportation">Transportation</option>
              <option value="Utilities">Utilities</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
            />
          </label>
          <button type="submit">Save Expense</button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseModal;
