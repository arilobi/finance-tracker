import TransactionForm from "../components/TransactionForm";
import { useState } from "react";

export default function Dashboard() {
    const [transactions, setTransactions] = useState([])

    const handleAddTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction])
    };

    return (
        <div>
            <TransactionForm onAddTransaction={handleAddTransaction} />
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        {transaction.name}
                        {transaction.date}
                        KES{transaction.amount}
                        {transaction.transactionType}
                    </li>
                ))}
            </ul>
        </div>
    );
}

