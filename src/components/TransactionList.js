import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'
import Transaction from './Transaction';
const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    const dispTransaction = transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction} />);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {dispTransaction}
            </ul>
        </>
    )
}

export default TransactionList
