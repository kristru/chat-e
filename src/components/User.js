import React, {Component} from 'react';

class User extends Component {
  constructor(props){
   super(props);
   this.state = {
     user: ''
   }
  };

  signInWithPopup(provider){
    var provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
    console.log(provider);
  }

  render(){
   return(
     <button onClick={(provider) => this.signInWithPopup(provider)}>Sign In</button>
   );
  }
}

export default User;
