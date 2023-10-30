/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
During the day warm air found on the land is moved up and creates an area of low pressure

==================================================*/
import {Link} from 'react-router-dom';
import DashboardNav from './DashboardNav';
import CreditAPI from './CreditAPI';

import './css/Credit.css';

const Credits = (props) => {
  return (
    <div>
      <div>
        <DashboardNav/>
      </div>
      <div class='main-credit'>
        <h1 class='main-credit-header'>Credits</h1>
        <div class='main-credit-info'>
          <div class='main-credit-left'>
            <CreditAPI />
          </div>
          <div class='main-credit-right'>
            <h1>Add Credits</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credits;