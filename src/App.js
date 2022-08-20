import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
constructor(props) {
  super(props)

  this.state = {
    asteroid: '',
    // first_observation_date: '',
  }
  //above is named by nasa
}

handleSubmit = async () => {
  
  const API = 'https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key={process.env.REACT_APP_ASTEROID}'
  const res= await axios.get(API);
  console.log(res.data)
  this.setState({asteroid: res.data.asteroid})
  // this.setState( {first_observation_date: res.data.first_observation_date}) //need multiple things here OR reference an array in state
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
        <h2>{this.state.asteroid}</h2>
          <ul>
            <li>Name: {this.state.asteroid}</li>
            <li>First Observation Date: {this.state.first_observation_date}</li>
          </ul>
      </div>
    )
  }
}

