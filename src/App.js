/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';  // Library used to send asynchronous HTTP requests to RESTful endpoints (APIs)

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';
import Dashboard from './components/Dashboard';
import DashboardNav from './components/DashboardNav';


class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: '0',
      creditList: [],
      creditAmount: 0,
      debitList: [],
      debitAmount: 0,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      },
    };
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }

  addDebit = (debitInfo) => {
    debitInfo.preventDefault();

    var currentDate = new Date();
    var newDate = currentDate.toISOString();

    var currentAmount = Number(this.state.accountBalance) - Number(debitInfo.target.amount.value);

    let newDebitList = this.state.debitList;
    newDebitList.push({id: this.state.debitList.length + 1, amount: debitInfo.target.amount.value, description: debitInfo.target.description.value, date: newDate});
    
    this.setState({debitList : newDebitList, accountBalance: currentAmount.toFixed(2)});
  }

  addCredit = (creditInfo) => {
    creditInfo.preventDefault();

    var currentDate = new Date();
    var newDate = currentDate.toISOString();

    var currentAmount = Number(this.state.accountBalance) + Number(creditInfo.target.amount.value);

    let newCreditList = this.state.creditList;
    newCreditList.push({id: this.state.creditList.length + 1, amount: creditInfo.target.amount.value, description: creditInfo.target.description.value, date: newDate});
    
    this.setState({debitList : newCreditList, accountBalance: currentAmount.toFixed(2)});
  }

  async componentDidMount(){
    let linktoDebitAPI = 'https://johnnylaicode.github.io/api/debits.json';
    try {
      let responseDebit = await axios.get(linktoDebitAPI);
      this.setState({debitList: responseDebit.data});
    }
    catch (error){
      if (error.responseDebit){
        console.log(error.responseDebit.data);  // Print out error message (e.g., Not Found)
        console.log(error.responseDebit.status);  // Print out error status code (e.g., 404)

      }
    }
    var totalDebit = 0;
    for (let i = 0; i < this.state.debitList.length; i++){
      totalDebit = (totalDebit + this.state.debitList[i].amount);
    }

    let linktoCreditAPI = 'https://johnnylaicode.github.io/api/credits.json'
    try {
      let responseCredit = await axios.get(linktoCreditAPI);
      this.setState({creditList: responseCredit.data});
    }
    catch (error){
      if (error.responseCredit){
        console.log(error.responseCredit.data);  // Print out error message (e.g., Not Found)
        console.log(error.responseCredit.status);  // Print out error status code (e.g., 404)
      }
    }

    var totalCredit = 0;
    for (let i = 0; i < this.state.creditList.length; i++){
      totalCredit = (totalCredit + this.state.creditList[i].amount);
    }

    var newAmount = totalCredit - totalDebit;
    this.setState({accountBalance: newAmount.toFixed(2)});

  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    // Create React elements and pass input props to components    
    const HomeComponent = () => (<Home />)
    const DashboardNavComponent = () => (<DashboardNav />) 
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (<Credits credits={this.state.creditList} addCredit={this.addCredit} accountBalance={this.state.accountBalance}/>) 
    const DebitsComponent = () => (<Debits debits={this.state.debitList} addDebit={this.addDebit} accountBalance={this.state.accountBalance}/>) 
    const DashboardComponent = () => (<Dashboard accountBalance={this.state.accountBalance}/>)
    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/WebDev-Assignment-3">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route extact path="/dashboard" render={DashboardComponent}></Route>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;