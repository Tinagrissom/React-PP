import React, { useState } from "react";
import { Helmet } from 'react-helmet'

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Home Desk",
    amount: 94.12,
    date: new Date(2020, 3, 14),
  },
  {
    id: "e2",
    title: "Windshield Repair",
    amount: 299.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "New Tires",
    amount: 336.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Vet Bill",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  // This function will pass the lifted expenses from the NewExpense component and pass the data to Expenses via props
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Expenses Tracker</title>
        <link rel="canonical" href="https://elegant-cori-276892.netlify.app/" />
        <meta name="description" content="Expences tracker" />
      </Helmet>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
// JSX JavaScript XML - the rendered HTML inside javascript file
