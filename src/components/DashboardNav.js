/*==================================================
src/components/AccountBalance.js

The AccountBalance component displays account balance. It is included in other page views.
==================================================*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './css/DashboardNav.css'

class DashboardNav extends Component {
  // Display account balance
  render() {
    return (
      <div>
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
						<section class='header-navigation__content--links'>
						<ul class='list-nav'>
							<li><Link style={{ textDecoration: 'none', color:'black'  }} to='/dashboard'>Dashboard</Link></li>
							<li><Link style={{ textDecoration: 'none', color:'black'  }} to='/userProfile'>User Profile</Link></li>
							<li><Link style={{ textDecoration: 'none', color:'black' }} to='/'>Log Out</Link></li>
						</ul>
						</section>
					</section>
				</section>
			</div>
      </div>
    );
  }
}

export default DashboardNav;