/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import DashboardNav from './DashboardNav';
import AccountBalance from './AccountBalance';
import './css/DebitCredit.css';

const Credits = (props) => {
  // Create the list of Debit items
  let creditsView = () => {
    const { credits } = props;
    return credits.map((credit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      let date = credit.date.slice(0,10);
      return <div class='info-main'key={credit.id}>
				  <div class='info-container'>
					<div class = 'info-container-top'>
						<div class = 'info--id'><h2>{credit.id}</h2></div>
						<div class = 'info--description'> <h2>{credit.description}</h2></div>
					</div>
					<div class = 'info-container-bottom'>
						<div class = 'info--date'><h3>{credit.date}</h3></div>
						<div class = 'info--amount'><h2>{credit.amount}</h2></div>
					</div>
				  </div>
          </div>
    });
  }
  // Render the list of Debit items and a form to input new Debit item
  return (
    
    <div>
      <DashboardNav />
      <h1>Credit</h1>
      <div class='balance'><AccountBalance accountBalance={props.accountBalance}/></div>
      <div class='main-body'>
      <div class='form'>
          <form onSubmit={props.addCredit}>
          <input type="text" name="description" />
          <input type="number" name="amount" />
          <button type="submit">Add Credit</button>
        </form>
        </div>
        <div class='view'>
          {creditsView()}
        </div>
      </div>
    </div>
  );
}

export default Credits;