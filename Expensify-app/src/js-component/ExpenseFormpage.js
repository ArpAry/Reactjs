import React from "react";
import moment from "moment";
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
const now = moment();
console.log(now);

export default class ExpenseFormPage extends React.Component {
  state = {
    description: "",
    Amount: "",
    Note: "",
    createdAt:moment(),
    calanderFocused:false

  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onAmountChange = (e) => {
    const Amount = e.target.value;
    if (Amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ Amount }));
    }
  };
  onNoteChange = (e) => {
    const Note = e.target.value;
    this.setState((e) => ({ Note }));
  };
  onDateChange=(createdAt)=>{
    this.setState(()=>({createdAt}));
  };
  onFocusChange=({focused})=>{
      this.setState(()=>({calanderFocused:focused}))

  };
  render() {
    return (
      <div>
        <h1>Expense Page</h1>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          value={this.state.Amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
        date={this.state.createdAt}
        onDateChange={this.onDateChange}
        focused={this.state.calanderFocused}
        onFocusChange={this.onFocusChange}
        numberOfMonths={1}
        isOutsideRange={()=> false}
    />
        <textarea
          placeholder="Add a note for your expense "
          value={this.state.Note}
          onChange={this.onNoteChange}
        ></textarea>
        <button>Add Expense</button>
      </div>
    );
  }
}
