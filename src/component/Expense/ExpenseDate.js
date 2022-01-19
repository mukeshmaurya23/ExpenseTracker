import "./ExpenseDate.css";
import React from "react";
function ExpenseDate(props) {
  //this is the seperate componets by exporting it  we can use it features
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expensedate-month">{month}</div>
      <div className="expensedate-day">{day}</div>
      <div className="expensedate-year">{year}</div>
    </div>
  );
}
export default ExpenseDate;
