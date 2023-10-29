/*==================================================
src/components/Home.js

The Home component is used to demonstrate the use of Link.
==================================================*/
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

import './css/Home.css';

class Home extends Component {
  render() {
    return (
      <div class='body'>
        <div class='header-navigation'>
          <section class='header-navigation__content-row'>
            <section class='header-navigation__content--left'>
              <Link style={{ textDecoration: 'none' }}>
                <h1>Bank of React</h1>
              </Link>
              <Link>
                <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'></img>
              </Link>
            </section>
            <section class='header-navigation__content--right'>
            </section>
          </section>
          <section class='header-navigation__content-row'>
            <section class='header-navigation__content-resources'>
              <ul class='list-resources'>
                <li><Link style={{ textDecoration: 'none' }}>Checking</Link></li>
                <li><Link style={{ textDecoration: 'none' }}>Savings & CDs</Link></li>
                <li><Link style={{ textDecoration: 'none' }}>Credit Cards</Link></li>
                <li><Link style={{ textDecoration: 'none' }}>Loans</Link></li>
              </ul>
            </section>
          </section>
        </div>
        <div class='main-signin__content'>
          <div class='signin-text'>
            <h1> </h1>
          </div>
          <div class='signin-menu'>
            <div class='signin-menu__container'>
              <h1>Welcome!</h1>
              <div class='singin-button'>
                <Link to="/login"><button>Sign In</button></Link>
              </div>
              <h4>Not a member? Sign up now.</h4>
            </div>
          </div>
        </div>
        <div class='main-info__content'>
          <div class='main-info__container'>
            <div class='main-info__content--header'>
              <h1 class='main-info--header'>Manage Your Bank Accounts</h1>
              <h4 class='main-info--subheader'>Access your accounts 24/7, whenever and wherever</h4>
            </div>
            <div class='main-info__content--services'>
              <ul>
                <li>
                  <img src='https://factohr-1a56a.kxcdn.com/wp-content/uploads/2021/03/hpetpoe.png'></img>
                  <h2>Pay On The Go</h2>
                  <p>Make payments, view history and get e-bills. Reduce the hassle of paying with our app.</p>
                </li>
                <li>
                  <img src='https://zilbank.com/wp-content/uploads/2023/06/Understanding-Best-Online-Instant-Check-Cashing-ZB.png'></img>
                  <h2>Deposite Anywhere</h2>
                  <p>Deposit checks using your mobile device with React Bank Mobile Deposit. Funds are usually available the next business day</p>
                </li>
                <li>
                <img src='https://website-assets-fd.freshworks.com/attachments/ckjv6jx7700lscjfzuyspsnv0-customer-service-team-training.one-half.png'></img>
                  <h2>Live Customer Service</h2>
                  <p>Call 1-111-1111 to talk to a real person any time of the day, any day of the week.</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <Link to="/userProfile">User Profile</Link>
        <br/>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/credits">Credits (to be implemented in the Assignment)</Link>
        <br/>
        <Link to="/debits">Debits (to be implemented in the Assignment)</Link>
        <br/><br/>
        <AccountBalance accountBalance={this.props.accountBalance}/>
      </div>
    );
  }
}

export default Home;