import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
    const handleSubmit = e => {
        e.preventDefault();
        if (text.trim() === '' || amount === 0) {
            alert('Please add text and amount.');
            return
        }
        const newTransaction = {
            id: Math.floor(Math.random() * 1000) + 1,
            text,
            amount: +amount, //converts amount to number from text
        }
        addTransaction(newTransaction);
        setText('')
        setAmount(0)
    }
    return (
        <>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label><br />
                    <input type="text" placeholder='Enter text...' value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount
                    (negative-expense , positive-income)</label>
                    <input type="number" placeholder='Enter amount...' value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className="btn" onClick={handleSubmit}>Add Transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
