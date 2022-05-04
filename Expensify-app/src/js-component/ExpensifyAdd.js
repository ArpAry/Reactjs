// import React from "react"; 
// import { connect } from 'react-redux';
// import ExpenseFormPage from "./ExpenseFormpage";
// import { addExpense } from "../actions/expenses";
// const ExpensifyAdd = (props) => (
//      <div>
//     <h1>Add Expense</h1>
//     <ExpenseFormPage onSubmit={(expenses) => {
//     // console.log("props from Exepensify-Add ")  ;
//      console.log(props);
//      console.log(expenses);
//           props.dispatch(addExpense(expenses)); 
//         props.history.push('/');
//     } }
//     />
//     </div>
//     );
// export default ExpensifyAdd;
// //export default connect()(ExpensifyAdd);
import React from 'react';
import { connect } from 'react-redux';
import ExpenseFormPage from './ExpenseFormpage';
import { addExpense } from '../actions/expenses';

const ExpensifyAdd = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseFormPage
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(ExpensifyAdd);