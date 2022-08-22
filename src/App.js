import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
constructor(props) {
  super(props)

  this.state = {
    asteroid_data: [],
    asteroid_name: '',
    first_observation_date: '',
  }
  //above is named by nasa
}

handleSubmit = async () => {
  let myName = 'lindsey';
  let name = `hello my name is ${myName}`; //${} for adding js
  console.log(name);
  const API = `https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=${process.env.REACT_APP_ASTEROID}` //creating url
  const res= await axios.get(API); 
  console.log(res.data);
  this.setState({asteroid_data: [res.data]}, () =>
  console.log(this.state.asteroid_data)); //if callback is only one line, curly braces not needed
  
  // this.setState({asteroid_name: res.data.name})
  // console.log(res.data.orbital_data.first_observation_date);
  // this.setState( {first_observation_date: res.data.orbital_data.first_observation_date}) //need multiple things here OR reference an array in state
}

// handleObservation = () => {
//   console.log(res.data)
//   this.setState({first_observation_date: res.data.first_observation_date})
// }
  
  render() {
    return (
      <div>
        <h1>Asteroid locater</h1>
        <button onClick={this.handleSubmit}>Locate Asteroid</button>
        <h2>{this.state.asteroid_name}</h2>
          {/* <ul>
            <li>Name: {this.state.asteroid_name}</li>
            <li>First Observation Date: {this.state.first_observation_date}</li>
          </ul> */}

        <ul>
        {this.state.asteroid_data.map((element) => {
            return (
              <>
              
              <li>Name: {element.name}</li>
              <li>ID: {element.id}</li>
              <li>First Observation Date: {element.orbital_data.first_observation_date}</li>
              </>
            )
          }
          )}
        </ul>

      </div>
    )
  }
}

