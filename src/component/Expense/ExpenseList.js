import "./ExpenseList.css";
import Expense from "./Expense";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <Expense
          key={expense.eid}
          name={expense.name}
          id={expense.id}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
