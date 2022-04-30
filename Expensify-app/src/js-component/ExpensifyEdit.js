import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import ExpenseFormPage from "./ExpenseFormpage";
import { editExpense , removeExpense } from "../actions/expenses";
const ExpensifyEdit = (props) => {
  let { id } = useParams();
  let location = useLocation();
 // console.log(location);
  //console.log(id);
  //console.log(props);
  return <div>
      Editing the Expense with id of {id}
  </div>;
};

 // <ExpenseFormPage
        // expense={props.expense}
        // onSubmit={(expense)=>{
        //   props.dispatch(editExpense(props.expense.id,expense));
        //   props.history.push('/');
        //   }}/>


// <button
//       onClick={() => {
//       props.dispatch(removeExpense({ id :props.expense.id}));
//       }}
//     >
//       Remove
//     </button> 


// const mapStateToProps=(state)=>{
//   let {id}=useParams();
//   return{
//     expense:state.expense.find((expense)=>expense.id===id )
//   }
// }
// export default connect(mapStateToProps)(ExpensifyEdit);
export default ExpensifyEdit;