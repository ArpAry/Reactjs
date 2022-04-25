import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filter";

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
    </div>
  );
};
const mapStatetoProps = (state) => {
  return {
    filter: state.filters,
  };
};
export default connect(mapStatetoProps)(ExpenseListFilter);
