import React from 'react';
// this is a named import, importing a single piece from the react library

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

  // const [title, setTitle] = useState(props.title);
  // useState is executed on a per component basis, will not update the tile for all components in Expenses
  // useState always returns an array w/ 2 elements, 1st element is current state value 2nd is function for updating
  // 1st points to the managed value (something that describes the value), 2nd value is a function we can call to setTitle (setNameRepeated)
  // react Hook, you know it's a Hook because it starts with 'use'. Must be called inside componenet function

  // const clickHandler = () => {
  //   setTitle('Updated!')
  //   console.log(title);
  // }
  
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;

// a component in react is just a javascript function
