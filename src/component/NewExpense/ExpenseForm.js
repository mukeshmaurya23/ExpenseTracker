import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredname, setTitle] = useState("");
  const [entereddate, setDate] = useState("");
  const [enteredid, setAmount] = useState("");
  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const amountChange = (event) => {
    setAmount(event.target.value);
    //console.log(event.target.value);
  };

  const dateChange = (event) => {
    setDate(event.target.value);
    console.log(event.target.value);
  };
  //this is the form event
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      name: enteredname, //same attribute name that is used in array destructuring ......error tha name mai
      id: +enteredid,
      date: new Date(entereddate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  //two way binding is imp in whenwe working with form ->for clearing the enetered input in form
  return (
    <form onSubmit={submitHandler}>
      <div className="main_conatiner">
        <div className="main_container_part">
          <label>Title</label>
          <input
            type="text"
            value={enteredname} //two way bindings
            onChange={titleChange}
          ></input>
        </div>
        <div className="main_container_part">
          <label>Amount</label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={enteredid} //two way binding
            onChange={amountChange}
          ></input>
        </div>

        <div className="main_container_part">
          <label>Date</label>
          <input
            type="date"
            value={entereddate} //two way binding
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="main_conatiner_btn">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
