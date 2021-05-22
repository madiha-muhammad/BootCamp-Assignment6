import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';

function Child() {

    let { transactions } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAdditoin = (event) => {
        event.preventDefault();
        console.log(newDesc, newAmount);
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Expense Tracker</h1>

            <h3>Your Balance<br /> $260</h3>

            <div className='expense-container'>
                <h3>INCOME<br /> $500</h3>
                <h3>EXPENSE<br /> $250</h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (
                        <li key={ind}>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                        </li>
                    )
                })}
            </ul>

            <h3>Add New Transaction</h3>
            <hr />

            <form className='transaction-form' onSubmit={handleAdditoin}>
                <label htmlFor="description">
                    Enter Description <br />
                    <input type="text" onChange={(e)=> setDesc(e.target.value)} required />
                </label>
                <br />
                <label htmlFor="amount">
                    Enter Amount <br />
                    <input type="number" onChange={(e) => setAmount(e.target.value)} required />
                </label>
                <br />
                <input type="submit" className="btnSubmit" value='Add Transaction' />
            </form>

        </div>
    );
}

export default Child;