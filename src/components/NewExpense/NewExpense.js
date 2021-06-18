import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [addNew, setAddNew] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setAddNew(false)
        // call the function passed through props and pass it the expense data (Lifting the data up to the App component)
    }

    const startAddHandler = () => {
        setAddNew(true)
    }

    const stopAddHandler = () => {
        setAddNew(false)
    }

    return (
        <div className="new-expense">
           
            {!addNew && <button onClick={startAddHandler}>Add New Expense</button>}
           
            {/* ExpenseForm component generates the data that we're passing up, works with states and fetches user inpu, passes up fetched data (lifting state up) */}
            {addNew && (
                <ExpenseForm   
                    onCancel={stopAddHandler}
                    onSaveExpenseData={saveExpenseDataHandler}
                />
            )}
            {/* value of this prop is a function. Best practice to start the naming with on when prop is function */}
        </div>
    )
}

export default NewExpense;