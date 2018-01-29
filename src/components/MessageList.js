import React, {Component} from 'react';

class MessageList extends Component {
 constructor(props){
   super(props);
   this.roomsRef = this.props.firebase.database().ref('rooms');
   this.state = {
     username: this.roomsRef.username,
     content: "message",
     sentAt: "this.timeStamp",
     roomID: "roomID",

   };
 }



 render(){
  return(
    <section>
      <section>
        <ul>
          <li>Here is where a list of messages would go.</li>
        </ul>
      </section>
      <form>
        <input type="text" />
        <input type="submit" value="Send Message" />
      </form>
    </section>
  );
 }
}

export default MessageList;
