/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import DashboardNav from './DashboardNav';
import AccountBalance from './AccountBalance';
import './css/Debit.css';

const Debits = (props) => {
  // Create the list of Debit items
  let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      let date = debit.date.slice(0,10);
      return <div class='info-main'key={debit.id}>
				  <div class='info-container'>
					<div class = 'info-container-top'>
						<div class = 'info--id'><h2>{debit.id}</h2></div>
						<div class = 'info--description'> <h2>{debit.description}</h2></div>
					</div>
					<div class = 'info-container-bottom'>
						<div class = 'info--date'><h3>{debit.date}</h3></div>
						<div class = 'info--amount'><h2>{debit.amount}</h2></div>
					</div>
				  </div>
          </div>
    });
  }
  // Render the list of Debit items and a form to input new Debit item
  return (
    
    <div>
      <DashboardNav />
      <h1>Debit</h1>
      <div class='balance'><AccountBalance accountBalance={props.accountBalance}/></div>
      <div class='main-body'>
      <div class='form'>
          <form onSubmit={props.addDebit}>
          <input type="text" name="description" />
          <input type="number" name="amount" />
          <button type="submit">Add Debit</button>
        </form>
        </div>
        <div class='debits'>
          {debitsView()}
        </div>
      </div>
    </div>
  );
}

export default Debits;