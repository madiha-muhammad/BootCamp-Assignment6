import react, { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';

const initialTransactions = [
    { amount: 500, desc: 'Cash' },
    { amount: 8500, desc: 'Camera' },
    { amount: 55500, desc: 'Car' }
]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj) {
        dispatch({
            type: 'ADD',
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}