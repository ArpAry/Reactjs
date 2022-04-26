import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
const ExpensifyDashboard = () => (
  <div>
    this is from dashboard Page
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);
export default ExpensifyDashboard;
