import React from "react";
import { connect } from "react-redux";
import expenses from "../selectors/expenses";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);
//{expenses}
//<p>{props.filter.text}</p>
const mapStatetoProps = (state) => {
  return {
    expenses: expenses(state.expense, state.filters),
  };
};
//filter:state.filters
export default connect(mapStatetoProps)(ExpenseList);
//export default ExpenseList;

//ConnectedExpensedList;
