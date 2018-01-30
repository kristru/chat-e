import React, {Component} from 'react';

class MessageList extends Component {
 constructor(props){
   super(props);
   this.messageRef = this.props.firebase.database().ref('messages');
   this.state = {
     messages: [],
     content: '',
     roomId: '',
     username: '',
     sentAt: '',
   };
 }

 componentDidMount(messages) {
   //firebase read function (.on) of Database snapshots
    this.messageRef.on('child_added', snapshot => {
      //sets room to a snapshot
      const message = snapshot.val();
      //updates the dom by creating a new array with the room
      this.setState({messages: this.state.messages.concat( message )});
    });
  }

 render(){
  return(
    <section>
      <section>
        <ul className="message-list">
          {
            this.state.messages.map((message, index) =>
              <li className="message" key={index}>
                <div className="content">{message.content}</div>
                <div className="username">from: {message.username}</div>
                <div className="timestamp">sent:{message.sentAt}</div>
              </li>
            )
          }
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
