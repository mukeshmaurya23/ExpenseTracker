import Expenses from "./component/Expense/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
import React, { useState } from "react";
const Dummy_data = [
  {
    id: 101,
    eid: "e1",
    name: "honda",

    date: new Date(2020, 3, 21),
  },
  {
    id: 102,
    eid: "e2",
    name: "motor",
    date: new Date(2021, 4, 22),
  },
  {
    id: 103,
    eid: "e3",
    name: "suzuki",

    date: new Date(2019, 5, 28),
  },
  {
    id: 104,
    eid: "e4",
    name: "volvo",
    date: new Date(2020, 7, 21),
  },
  {
    id: 105,
    eid: "e5",
    name: "tesla",
    date: new Date(2019, 9, 21),
  },
];
function App() {
  const [expenses, setExpenses] = useState(Dummy_data);
  //here when passing data from child to parent in parent its accept a function and a pointer to point in child ExpenseInfo={expensehandler is a pointer}
  const ExpenseInfoHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense ExpenseInfo={ExpenseInfoHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
