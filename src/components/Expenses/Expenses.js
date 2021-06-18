import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {

    // setting up state in componenet functon, initiallizing state with value of 2021
    const [filteredYear, setFilteredYear] = useState('2021');
    // useState returns an array with exactly two elements - the second element is always a function which you can call to set a new value for your state. 
    // Calling that function will then also trigger React to re-evaluate the component.

    // function that is passed down to ExpenseFilter componenet
    // expect to get selected year from the Filter component
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear)
    }

  return (
    <div>
      
        <Card className="expenses">
          
          {/* passing a function down to the ExpenseFilter component, and the child componenet will call the function when event is triggered*/}
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/> 
          {/* Controlled component - value is passed on to parent component and received from PC */}
          {/* Two way binding - selectedYear is passed down as props, and onChangeFilter is passing data up from ExpenseFilter */}
          {/* prop = onChangeFilter, pointing at ChangeHandler function */}

          <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          />
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
          />
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
          />
          <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
          />
        </Card>
    </div>
  );
}

export default Expenses;
