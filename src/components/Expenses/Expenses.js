import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  // setting up state in componenet functon, initiallizing state with value of 2021
  const [filteredYear, setFilteredYear] = useState("2021");
  // useState returns an array with exactly two elements - the second element is always a function which you can call to set a new value for your state.
  // Calling that function will then also trigger React to re-evaluate the component.

  // function that is passed down to ExpenseFilter componenet
  // expect to get selected year from the Filter component
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/* passing a function down to the ExpenseFilter component, and the child componenet will call the function when event is triggered*/}
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesList expenses={filteredExpenses}/>
        {/* Controlled component - value is passed on to parent component and received from PC */}
        {/* Two way binding - selectedYear is passed down as props, and onChangeFilter is passing data up from ExpenseFilter */}
        {/* prop = onChangeFilter, pointing at ChangeHandler function */}
        
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>} */}
        {/* if you use the && operator, it will return the value after the && operator if the check it true */}
        {/* {filteredExpenses.length > 0 && 
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        
        {/* <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          /> */}
      </Card>
    </div>
  );
}

export default Expenses;
