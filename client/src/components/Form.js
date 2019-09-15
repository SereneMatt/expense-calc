import React, { Component } from 'react';

export class Form extends Component {
  state = {
    formControls: {
      spent_for: {
        value: ''
      }, 
      amount: {
        value: ''
      },
      pricy: {
        value: '' 
      }
    }
  }

  onInputChange = event => {
    let formValues = this.state.formControls;
    const name = event.target.name;
    const value = event.target.value;
    formValues[name] = value;
    this.setState({formValues});
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.formControls.spent_for, this.state.formControls.amount, this.state.formControls.pricy);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input 
            type="text"
            name="spent_for"
            value={this.state.formControls.spent_for.value} 
            placeholder="Spent for..."
            onChange={this.onInputChange} />
          <input 
            type="text"
            name="amount"
            value={this.state.formControls.amount.value} 
            placeholder="$"
            onChange={this.onInputChange} />
          <input 
            type="checkbox"
            name="pricy"
            value={this.state.formControls.pricy.value}
            onChange={this.onInputChange} />Pricy
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default Form;
