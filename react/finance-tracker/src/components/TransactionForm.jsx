import React from "react";
import { useState } from "react";

export default function TransactionForm({ onAddTransaction }) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [transactionType, setTransactionType] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !amount || !date || !transactionType) {
            alert("All fields are required");
            return;
        }

        const newTransaction = {
            name: name,
            date: new Date(date).toISOString(),
            amount: parseFloat(amount),
            transactionType: transactionType
        };

        onAddTransaction(newTransaction);

        // Resetting the form after submitting
        setName("");
        setDate("");
        setAmount("");
        setTransactionType("");
    };

    return (
        <div className="form-app">
            <h3>Use this form to fill in your transactions</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </label>
                <label>
                    Amount:
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </label>
                <label>
                    Transaction Type:
                    <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
                        <option value="">Select</option>
                        <option value="food">Food</option>
                        <option value="utilities">Utilities</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="rent">Rent</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
