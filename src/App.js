import React, { Component } from 'react';
import logo from './logo.png';

import './App.css';

class App extends Component {
  //Setting states
  constructor(props){
    super(props);
    this.state = {
      deadline : "30 January, 2018", 
      newDeadline:""
    }
  }

//Function to calculate remaining time
calcRemTime(deadline){
  const time = Date.parse(deadline) - Date.parse(new Date());
  const seconds = Math.floor((time/1000) % 60);
  const minutes = Math.floor((time/1000/60) % 60);
  const hours = Math.floor((time/(1000*60*60)) % 60);
  const days = Math.floor((time/(1000*60*60*60)) % 24);
  
  console.log(days,"|",hours,"|",minutes,"|",seconds);
}
//Function to update states
changedeadline(){
  this.setState({deadline : this.state.newDeadline});
}
  render() {
    this.calcRemTime(this.state.deadline);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">COUNTDOWNER</h1>
        </header>
        <div className="App-filler">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <br/>
          <div className="row container">
            <div className="col-md-2"></div>
            <div className="col-md-2">XX days</div>
            <div className="col-md-2">XX hours</div>
            <div className="col-md-2">XX minutes</div>
            <div className="col-md-2">XX seconds</div>
            <div className="col-md-2"></div>
          </div>
          <br/>
          <div className="text-center">
            <input className="changedate" onChange={event => this.setState({newDeadline : event.target.value})} placeholder="Countdown till date.." type="text"/>
            <button className="btn btn-primary" onClick={() =>this.changedeadline()}>Submit</button>
          </div>
        </div>
      </div> 
    );
  }
}

export default App;
