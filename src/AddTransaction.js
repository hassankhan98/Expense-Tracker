import React,{ useState, useContext } from 'react'
import { GlobalContext } from './context/GlobalState';
import './App.css';

export const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const handleAddition = (event) =>{
        event.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
    }



    return (
        <div>
           <h3>Add new transaction</h3>
            <hr />
            <form onSubmit={handleAddition}>
                 <div className="form-control">
                    <label>Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." required/>
                 </div>
                 <div className="form-control">
                     <label>Amount <br />(negative - expense, positive - income)</label>
                     <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." required/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
