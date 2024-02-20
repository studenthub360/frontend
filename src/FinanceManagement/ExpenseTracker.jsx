import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Chart from "chart.js/auto";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [budget, setBudget] = useState(0);
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudget(parseFloat(e.target.value));
  };

  const handleAddExpense = () => {
    if (category && amount) {
      const newExpense = {
        category,
        amount: parseFloat(amount),
      };

      setExpenses([...expenses, newExpense]);
      setCategory("");
      setAmount("");
    }
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const handleFilterExpenses = (selectedCategory) => {
    const lowerCaseSelectedCategory = selectedCategory.toLowerCase();

    if (lowerCaseSelectedCategory === "all") {
      setFilteredExpenses(expenses);
    } else {
      const filtered = expenses.filter(
        (expense) =>
          expense.category.toLowerCase() === lowerCaseSelectedCategory
      );
      setFilteredExpenses(filtered);
    }
  };

  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const remainingBudget = budget - totalExpenses;

  const categories = Array.from(
    new Set(expenses.map((expense) => expense.category))
  );
  useEffect(() => {
    // Create a pie chart
    const ctx = document.getElementById("expenseChart").getContext("2d");
    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: categories,
        datasets: [
          {
            data: categories.map((category) =>
              expenses
                .filter((expense) => expense.category === category)
                .reduce((acc, expense) => acc + expense.amount, 0)
            ),
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF8C00",
              "#32CD32",
              "#8A2BE2",
              "#FFD700",
              "#00CED1",
            ],
          },
        ],
      },
    });

    return () => {
      // Cleanup chart instance on component unmount
      chart.destroy();
    };
  }, [expenses, categories]);

  return (
    <div className="min-h-screen bg-[#F0F9FB] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <Navbar />
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold mb-4 text-[#1b1963]">
            Expense Tracker
          </h1>
          <div className="px-1 py-4">
            <h2 className="text-xl font-bold mb-2 text-[#1b1963]">Budget:</h2>
            <div className="mb-4">
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Monthly Budget:
              </label>
              <input
                id="budget"
                type="number"
                step="0.01"
                value={budget}
                onChange={handleBudgetChange}
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold text-gray-800">
                Remaining Budget:
              </div>
              <div className="text-2xl font-bold text-gray-800">
                ₦{remainingBudget.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-5 max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-[#1b1963]">Expenses</h1>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category:
          </label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={handleCategoryChange}
            className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Amount:
          </label>
          <input
            id="amount"
            type="number"
            step="0.01"
            value={amount}
            onChange={handleAmountChange}
            className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleAddExpense}
          className="bg-[#1b1963] hover:bg-[#F0F9FB] hover:text-[#1b1963] text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Add Expense
        </button>
        <div className="px-1 py-4">
          <h2 className="text-xl font-bold mb-2 text-[#1b1963]">Expenses:</h2>
          {filteredExpenses.length > 0 ? (
            <ul>
              {filteredExpenses.map((expense, index) => (
                <li
                  key={index}
                  className="border-b border-gray-300 py-3 flex justify-between items-center transition duration-200 hover:bg-gray-50"
                >
                  <div>
                    <span className="text-gray-800 font-bold">
                      {expense.category}
                    </span>
                    <span className="text-gray-500 ml-2">
                      (₦{expense.amount.toFixed(2)})
                    </span>
                  </div>
                  <button
                    className="text-red-600 hover:text-red-800 transition duration-200"
                    onClick={() => handleDeleteExpense(index)}
                  >
                    {/* You can add an icon or text for deleting expense */}
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No expenses added yet.</p>
          )}
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2 text-[#1b1963]">
              Total Expenses:
            </h3>
            <div className="bg-white px-4 py-3 border rounded-md shadow-sm">
              <span className="text-2xl font-bold text-gray-800">
                ₦{totalExpenses.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold mb-2 text-[#1b1963]">Categories:</h2>
          <div className="mb-4">
            <label
              htmlFor="filterCategory"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Filter by Category:
            </label>
            <select
              id="filterCategory"
              value={category}
              onChange={(e) => handleFilterExpenses(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {/* <option value="all">All</option> */}
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          {/* Render categorized expenses */}
          {filteredExpenses.length > 0 ? (
            <ul>
              {filteredExpenses.map((expense, index) => (
                <li key={index}>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-800 font-bold">
                        {expense.category}
                      </span>
                      <span className="text-gray-500 ml-2">
                        (₦{expense.amount.toFixed(2)})
                      </span>
                    </div>
                    <button
                      className="text-red-600 hover:text-red-800 transition duration-200"
                      onClick={() => handleDeleteExpense(index)}
                    >
                      {/* You can add an icon or text for deleting expense */}
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No expenses added yet.</p>
          )}
        </div>
      </div>
      <div className="mt-8 max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold mb-2 text-[#1b1963]">Reports:</h2>
          <p className="text-gray-600">
            Generate reports to visualize your spending habits.
          </p>
          <div className="mt-2">
            <canvas id="expenseChart" width="40" height="40"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
