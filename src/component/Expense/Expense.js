import "./Expense.css";
import Card from "../UI/Card";
import React from "react";
import ExpenseDate from "./ExpenseDate";

const Expense = (props) => {
  //here props is used to pass data from another component to this component
  //dynamic placeholder representation in react

  return (
    <li>
      <Card className="btn">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="names">
          <h2>{props.name}</h2>
          <div className="id">${props.id}</div>
        </div>
      </Card>
    </li>
  );
};

export default Expense;
//<expenseform date={props.date}
//you can also simply do hard coded eg <h2>Date</h2>
