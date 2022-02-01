import React from "react";

export default class Addoption extends React.Component {
  state = {
    error: undefined,
  };

  submitHandle = (e) => {
    e.preventDefault();
    let newOption = e.target.elements.option.value.trim();
    const error = this.props.submitHandle(newOption);

    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  };
  render = () => (
    <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.submitHandle}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
}
