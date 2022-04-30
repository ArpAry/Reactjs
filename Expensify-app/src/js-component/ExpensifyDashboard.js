import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
const ExpensifyDashboard = (props) =>{
console.log(props);
 return (
  <div>
  <ExpenseList/>  <ExpenseListFilter/>
  
  <h1>hello</h1>
  </div>
)};
export default ExpensifyDashboard;
//<ExpenseList/>  <ExpenseListFilter/>
//  <ExpenseList/>