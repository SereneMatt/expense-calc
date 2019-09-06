import React, { Component } from 'react';

export class Form extends Component {
  state = { spent_for: '', amount: '', pricy: '' };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.spent_for, this.state.amount, this.state.pricy);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input 
            type="text" 
            value={this.state.spent_for} 
            placeholder="Spent for..."
            onChange={e => {this.setState({ spent_for: e.target.value.spent_for})}} />
          <input 
            type="text" 
            value={this.state.amount} 
            placeholder="$"
            onChange={e => {this.setState({ amount: e.target.value.amount })}} />
          <input 
            type="checkbox" 
            value={this.state.pricy}
            onChange={e => {this.setState({ pricy: e.target.value.pricy })}} />Pricy
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default Form;
