import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Form from './components/Form';
import ExpenseApi from './api/expense';

export class App extends React.Component {
  addExpense = async item => {
    ExpenseApi.post('/expenses', {
      params: {
        "spent_for":"transport",
        "amount":"30.57",
        "pricy":"true"
      }
    })
  }

  render() {
    return (
      <div>
        <AppNavbar></AppNavbar>
        <Form onSubmit={this.addExpense}></Form>
      </div>
    )
  }
}

export default App;

