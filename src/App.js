import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomsList from './components/RoomsList.js';
import MessageList from './components/MessageList.js'
import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCWRm3pBRh7mvmvVFTIDPv5PNV15b13xaQ",
    authDomain: "chat-e-012018.firebaseapp.com",
    databaseURL: "https://chat-e-012018.firebaseio.com",
    projectId: "chat-e-012018",
    storageBucket: "chat-e-012018.appspot.com",
    messagingSenderId: "133229647795"
  };

  firebase.initializeApp(config);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeRoom: '',
    };
  }

setActiveRoom(room){
  this.setState({activeRoom:room});
  console.log(this.state.activeRoom);
}

  render() {
    return (
      <div className="App container-fluid">
        <div className="App-Content container row">

          <section className="Left-Dashboard col-lg-4">
            <header className="App-header row">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <RoomsList
              firebase={firebase}
              activeRoom={this.state.activeRoom}
              setActiveRoom={(room) => this.setActiveRoom(room)}
            />
          </section>

          <section className="Message-Board col-lg-8">
            <MessageList
              firebase={firebase}
              activeRoom={this.state.activeRoom}
            />
          </section>

        </div>
      </div>
    );
  }
}

export default App;
