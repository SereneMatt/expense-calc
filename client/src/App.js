import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Form from './components/Form';
import ExpenseApi from './api/expense';

export class App extends React.Component {
  addExpense = async (spent_for, amount, pricy) => {
    ExpenseApi.post('/expenses', {
      params: {
        spent_for, amount, pricy
      }
    })
  }

  render() {
    return (
      <div>
        <AppNavbar></AppNavbar>
        <Form onFormSubmit={this.addExpense}></Form>
      </div>
    )
  }
}

export default App;

