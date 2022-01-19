import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveChangleHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      eid: Math.random().toString(),
    };
    //console.log(expenseData);
    props.ExpenseInfo(expenseData); //passing data from child to parents go on app.js
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveChangleHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

//child to parent-> App parent component hai -> so to reach data in app.js which we generate in expenseForm
//first we have to reach NewExpense because newexpense he app.js mai call ho raha ya render ho raha
//so in newExpense ->ExpenseForm mai ek function like pointer banao onSaveExpenseData={onsaveChnageHandler}
//onsaveExpensedata ko form mai props ke through access karna hai....
export default NewExpense;
