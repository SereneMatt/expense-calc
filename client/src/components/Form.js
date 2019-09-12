import React, { Component } from 'react';

export class Form extends Component {
  state = {
    spent_for: ''
    // formControls: {
    //   spent_for: {
    //     value: ''
    //   }, 
    //   amount: {
    //     value: ''
    //   },
    //   pricy: {
    //     value: '' 
    //   }
    // }
  }

  onInputChange = event => {
    // const name = event.target.name;
    // const value = event.target.value;

    // this.setState({
    //   formControls: {
    //     ...this.state.formControls,
    //     [name]: {
    //       ...this.state.formControls[name],
    //       value
    //     }
    //   }
    // });
    this.setState({ spent_for: event.target.value });
  };

  onFormSubmit = e => {
    console.log('ss', this.state.spent_for)
    e.preventDefault();
    this.props.onFormSubmit(this.state.spent_for);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input 
            type="text"
            name="spent_for"
            value={this.state.spent_for} 
            placeholder="Spent for..."
            onChange={this.onInputChange} />
          {/* <input 
            type="text" 
            value={this.state.formControls.amount.value} 
            placeholder="$"
            onChange={this.onInputChange} />
          <input 
            type="checkbox" 
            value={this.state.formControls.pricy.value}
            onChange={this.onInputChange} />Pricy */}
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default Form;
