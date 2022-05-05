import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filter";
const ExpenseListFilter = (props) => {
  return (
    <div>
      <input
        type="text"
        defaultValue={props.filter.text}
        onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        value={props.filter.sortby}
        onChange={(e) => {
          if (e.target.value === "date") {
            props.dispatch(sortByDate());
          } else if (e.target.value === "amount") {
            props.dispatch(sortByAmount());
          }
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};
const mapStatetoProps = (state) => {
  return {
    filter: state.filters,
  };
};
//export default ExpenseListFilter;
export default connect(mapStatetoProps)(ExpenseListFilter);
