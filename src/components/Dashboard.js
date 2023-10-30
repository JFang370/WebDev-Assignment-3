import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';


import './css/Dashboard.css'
import DashboardNav from './DashboardNav';

class Dashboard extends Component {
  render() {
    return (
		<div class='dashboard-container'>
			<DashboardNav />
			<div class='balance'><AccountBalance accountBalance={this.props.accountBalance}/></div>
			<div class='dashboard-cards__content'>
          <div class='card'>
		  <div class='card__container'>
              <h1>Debit</h1>
              <div class='card-button'>
                <Link to="/debits"><button>Add Debit</button></Link>
              </div>
            </div>
          </div>
          <div class='card'>
            <div class='card__container'>
              <h1>Credit</h1>
              <div class='card-button'>
                <Link to="/credits"><button>Add Credit</button></Link>
              </div>
            </div>
          </div>
        </div>
		</div>
		
    );
  }
}

export default Dashboard;