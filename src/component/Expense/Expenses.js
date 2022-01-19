import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import Expensefilter from "./Expensefilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredyear, setFilteredYear] = useState("2022");
  const filterChangehandler = (selectedyear) => {
    setFilteredYear(selectedyear);
    //console.log(selectedyear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });

  return (
    <Card className="expenses">
      <Expensefilter
        selected={filteredyear}
        onChangeFilter={filterChangehandler}
      />
      <ExpensesChart expenses={filteredExpense}></ExpensesChart>
      <ExpenseList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
// {filteredExpense.map((expense) => (
//   <Expense
//     key={expense.eid}
//     name={expense.name}
//     id={expense.id}
//     date={expense.date}
//   />
// ))}

// {/* {filteredExpense.length === 0 && <h3>No Expense Found</h3>} */}
/* filteredExpense.length > 0 && */
/* {/*  <Expense
        name={props.items[0].name} //here expense are not presnented dynamically so how to presnet them dynamically
        id={props.items[0].id}
        date={props.items[0].date}
      />
      <Expense
        name={props.items[1].name}
        id={props.items[1].id}
        date={props.items[1].date}
      />
      <Expense
        name={props.items[2].name}
        id={props.items[2].id}
        date={props.items[2].date}
      />
      <Expense
        name={props.items[3].name}
        id={props.items[3].id}
        date={props.items[3].date}
      /> 
        {props.items.map((expense) => (
          <Expense id={expense.id} date={expense.date} />
        ))}
          <Expense
        name={props.items[0].name} //here expense are not presnented dynamically so how to presnet them dynamically
        id={props.items[0].id}
        date={props.items[0].date}
      />
      <Expense
        name={props.items[1].name}
        id={props.items[1].id}
        date={props.items[1].date}
      />
      <Expense
        name={props.items[2].name}
        id={props.items[2].id}
        date={props.items[2].date}
      />
      <Expense
        name={props.items[3].name}
        id={props.items[3].id}
        date={props.items[3].date}
      />*/
