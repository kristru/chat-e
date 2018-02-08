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

  signOut(){
    this.props.firebase.auth().signOut();
    console.log('sign user out successful');
  }

  render(){
   return(
     <section className="login-section">
      <button onClick={(provider) => this.signInWithPopup(provider)}>Sign In</button>
      <button onClick={() => this.signOut()}>Sign Out</button>
     </section>
   );
  }
}

export default User;
