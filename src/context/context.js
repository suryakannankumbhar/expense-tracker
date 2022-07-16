import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [
    {
        amount: 80000,
        category: 'Salary',
        type: 'Income',
        date: '2022-07-17',
        id: 'c581df33-0874-477b-8d4d-1c0fcd84ad13',
    },
    {
        amount: 2000,
        category: 'Clothes',
        type: 'Expense',
        date: '2022-07-17',
        id: 'd8252c0f-1db6-47a7-939d-c88f5eec10f3',
    },
    {
        amount: 21344,
        category: 'Savings',
        type: 'Income',
        date: '2022-07-17',
        id: '558686a9-ac85-47c7-a8a5-e7ef15bb6a2b',
    },
    {
        amount: 300,
        category: 'House',
        type: 'Expense',
        date: '2022-07-17',
        id: '96755b8d-0550-4982-bf7c-a84c16c7d4ff',
    },
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction = id => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    };
    const addTransaction = transaction => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    };

    const balance = transactions.reduce(
        (acc, currVal) =>
            currVal.type === 'Expense'
                ? acc - currVal.amount
                : acc + currVal.amount,
        0
    );

    return (
        <ExpenseTrackerContext.Provider
            value={{
                deleteTransaction,
                addTransaction,
                transactions,
                balance,
            }}
        >
            {children}
        </ExpenseTrackerContext.Provider>
    );
};
