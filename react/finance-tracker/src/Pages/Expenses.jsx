import React, { useState, useEffect } from 'react';
import expensephoto from "../assets/images/expensephoto.png";
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    // Fetch data from db.json to display in the Expenses component
    fetch("http://localhost:3000/transactions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setExpenses(data || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const expenseStyles = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
  };

  return (
    <div class="expense-cls" style={expenseStyles}>
      <img src={expensephoto} alt="a calculator" class="expense-img" />
      <h2>Expenses</h2>
      <table className={`expense-table ${isDarkMode ? "table-dark" : "table-light"}`} >
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;