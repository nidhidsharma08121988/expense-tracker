import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(Transaction => Transaction.amount);
    const pAmt = amounts.filter(amount => amount > 0);
    const nAmt = amounts.filter(amount => amount < 0);
    const incomeSum = pAmt.reduce((total, amt) => amt + total).toFixed(2);
    const expenseSum = nAmt.reduce((total, amt) => amt + total).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    ${incomeSum}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    ${Math.abs(expenseSum)}
                </p>
            </div>
        </div>
    )
}

export default IncomeExpenses
