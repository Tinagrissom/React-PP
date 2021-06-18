import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        // call the function passed through props and pass it the expense data (Lifting the data up to the App component)
    }

    return (
        <div className="new-expense">
            {/* ExpenseForm component generates the data that we're passing up, works with states and fetches user inpu, passes up fetched data (lifting state up) */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            {/* value of this prop is a function. Best practice to start the naming with on when prop is function */}
        </div>
    )
}

export default NewExpense;