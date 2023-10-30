/*==================================================
ApiDataComponent.js
It performs search for users using API: https://jsonplaceholder.typicode.com/users

Functionalities:
- Use axios to send asynchronous HTTP requests to RESTful endpoints (APIs)

Practice:
- Change API endpoint (variable "linkToAPI") to 'https://jsonplaceholder.typicode.com/posts' 
- Modify React element to display each post's "title" and "body" information
================================================== */
import { Component } from 'react';
import axios from 'axios';  // Library used to send asynchronous HTTP requests to RESTful endpoints (APIs)
import './css/CreditAPI.css'


class ApiDataComponent extends Component {
  constructor(props){  // Store received data in state's "users" object
    super(props);
    this.state = {  // Initialize state with an empty users array
      users: []
    }
  }

  // Make async API call to retrieve data from remote website
  async componentDidMount() {
    let linkToAPI = 'https://johnnylaicode.github.io/api/credits.json';  // Link to remote website API endpoint

    // Await for promise (completion) returned from API call
    try {  // Accept success response as array of JSON objects (users)
      let response = await axios.get(linkToAPI);
      console.log(response);  // Print out response
      // To get data object in the response, need to use "response.data"
      this.setState({users: response.data});  // Store received data in state's "users" object
    } 
    catch (error) {  // Print out errors at console when there is an error response
      if (error.response) {
        // The request was made, and the server responded with error message and status code.
        console.log(error.response.data);  // Print out error message (e.g., Not Found)
        console.log(error.response.status);  // Print out error status code (e.g., 404)
      }    
    }
  }  

  render() {  // Parse each element in the user JSON array returned from API call
    return (
      <div className="container">
        {
          this.state.users.map( (credit) => {  // Extract "id", "name", and "email" properties of each user JSON array element
              return (
                <div key={credit.id}>
				  <div class='credit-info-container'>
					<div class = 'credit-info-container-top'>
						<div class = 'credit-info--id'><h2>{credit.id}</h2></div>
						<div class = 'credit-info--description'> <h2>{credit.description}</h2></div>
					</div>
					<div class = 'credit-info-container-bottom'>
						<div class = 'credit-info--date'><h3>{credit.date}</h3></div>
						<div class = 'credit-info--amount'><h2>{credit.amount}</h2></div>
					</div>
				  </div>
                </div>
              )
            }
          )
        }
      </div>
    )
  }
}

export default ApiDataComponent;