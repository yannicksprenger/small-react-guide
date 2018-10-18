import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // state only works inside Component importing from react
  state = {
    persons: [
      { name: 'Yannick', age: 28},
      { name: 'Bob', age: 35},
      { name: 'Tazer face', age: 80}
    ]
  }

  componentDidMount() {
    console.log("the page did load!")
  }

  switchNameHandler = () => {
    // Dont do this this.state.persons[0].name = 'MAGIC?';
    this.setState({ 
      persons: [
        { name: 'Magia', age: 1212135},
        { name: 'Chtulu', age: 1111515},
        { name: 'TAZER FACE', age: 5454681}
    ]})
  }

  render() {
    const bool = true;
    return (
      <div className="App">
        {bool &&
        <h1> Fuck the police!</h1>
        }
        {/* Handle Events */}
        <button onClick={this.switchNameHandler}>Switch Name</button>

        {/* <Person name="Yannick" age="24"/>
        <Person name="Bob" age="35"> My Hobbies: Alcoholism </Person>
        <Person name="Tazer face" age="80"/> */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My hobbies: Alcoholism </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
