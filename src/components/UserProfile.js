/*==================================================
src/components/UserProfile.js

The UserProfile component is used to demonstrate the use of Route and Link.
Note: You don't need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DashboardNav from './DashboardNav';


class UserProfile extends Component {
  render() {
    return (
      <div>
              <DashboardNav />

        <h1>User Profile</h1>

        <div>Username: {this.props.userName}</div>
        <div>Member Since: {this.props.memberSince}</div>
        <br/>
      </div>
    );
  }
}

export default UserProfile;