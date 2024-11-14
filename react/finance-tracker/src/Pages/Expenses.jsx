import React, { useState, useEffect } from 'react';
import TransactionForm from '../components/TransactionForm';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  // Function to fetch data from the server endpoint
  useEffect(() => {
    fetch('http://localhost:3000/transactions') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setExpenses(data || []); // Update state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddTransaction = (newTransaction) => { 
    fetch('http://localhost:3000/api/transactions', {
         method: 'POST', 
         headers: { 'Content-Type': 'application/json', }, 
         body: JSON.stringify(newTransaction), }) 
         .then(response => response.json()) 
         .then(data => { // Update state with the new transaction 
            setExpenses(prevExpenses => [...prevExpenses, data]); })
             .catch(error => { console.error('Error adding transaction:', error); 

     }); };

  return (
    <div>
      <h2>Expenses</h2>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <table>
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

export default Expenses;
