import React, { useContext } from 'react'
import { Transaction } from './Transaction';
import { GlobalContext } from './context/GlobalState'; 
import './App.css';

export const TransactionList = () => {

    const {transactions} = useContext(GlobalContext);

    return (
        <div>
            <h2>History</h2>
                <hr />
                <ul className="list">
                    {transactions.map(transaction => (<Transaction key={transaction.id}  transaction={transaction}/> ))}
                     
                </ul>    
        </div>
    )
}
