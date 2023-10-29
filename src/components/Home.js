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