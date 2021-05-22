import React from 'react';

function Child() {

    let transactions = [
        { amount: 500, desc: 'Cash' },
        { amount: 4500, desc: 'Camera' },
        { amount: 55500, desc: 'Car' }
    ]

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
                        <li>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                        </li>
                    )
                })}
            </ul>

            <h3>Add New Transaction</h3>
            <hr />

            <form className='transaction-form'>
                <label htmlFor="description">
                    Enter Description <br />
                    <input type="text" required />
                </label>
                <br />
                <label htmlFor="amount">
                    Enter Amount <br />
                    <input type="number" required />
                </label>
                <br />
                <input type="submit" className="btnSubmit" value='Add Transaction' />
            </form>

        </div>
    );
}

export default Child;