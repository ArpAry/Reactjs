import React from "react";
import ExpenseList from "./ExpenseList";
import ExpensifyAdd from "./ExpensifyAdd";
import ExpenseListFilter from "./ExpenseListFilter";
const ExpensifyDashboard=()=>(
  <div>
   <h1>Dashboard Page</h1>
   <ExpenseList/>
   <ExpenseListFilter/>
  </div>
);
export default ExpensifyDashboard;
//<ExpenseList/>