import React, {Component} from 'react';

class MessageList extends Component {
 constructor(props){
   super(props);
   //this sets the messages database to this.messageRef
   this.messageRef = this.props.firebase.database().ref('messages');
   this.state = {
     messages: [],
     content: '',
     roomId: '',
     username: '',
     sentAt: '',
     displayedMessages: [],
   };
 }

 //invoked before a mounted component recieves a new props
 componentWillReceiveProps(nextProps) {
   //console.log(nextProps.activeRoom);
   }

//this mounts the information to the dom
 componentDidMount(message) {
   //adding a trigger or event listener for every child added
    this.messageRef.on('child_added', snapshot => {
      //sets message to the snapshot value
      const message = snapshot.val();
      //updates the dom by creating a new array with the message
      this.setState({messages: this.state.messages.concat( message )});
    });
  }

updateDisplayedMessages(activeRoom) {
  console.log(this.props.activeRoom);

  //const results will change to setState
  const results = this.state.messages.filter((message)=> message.roomId === this.props.activeRoom);
  //this is what displayedMessages will be
  console.log(results);

}

 render(){
  return(
    <section>
      <h1>You&apos;re in room: {this.props.activeRoom}</h1>
      <section>
        <ul className="message-list" id="activeRoom">
          {
            this.state.messages.map((message, index) =>
              <li className="message" key={index} onClick={this.updateDisplayedMessages()}>
                <div className="content">{message.content}</div>
                <div className="username">from: {message.username}</div>
                <div className="timestamp">sent:{message.sentAt}</div>
                <div className="timestamp">roomId:{message.roomId}</div>
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
