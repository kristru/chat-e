import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomsList from './components/RoomsList.js'
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
  render() {
    return (
      <div className="App container-fluid">
        <div className="App-Content container row">

          <section className="Left-Dashboard col-lg-4">
            <header className="App-header row">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <RoomsList />
          </section>

          <section className="Message-Board col-lg-8"></section>

        </div>
      </div>
    );
  }
}

export default App;
