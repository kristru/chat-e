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
   console.log(nextProps);
   console.log(nextProps.activeRoom.key);
   this.updateDisplayedMessages(nextProps.activeRoom);
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
  console.log(activeRoom);
  const results = this.state.messages.filter((message) => message.roomId === activeRoom.key);
  console.log(results);
  this.setState({displayedMessages:results});
}

handleChange(e){
  //this is setting the message state
  this.setState({content:e.target.value});
  console.log('newMessage:' + this.state.content);
}

handleSubmit(e) {
  //stops the page from refreshing
  e.preventDefault();
  //if this field is blank do nothing
  if(!this.state.content) {return};
  //clear input field
  this.setState({content: ''});
  console.log(this.state.content);

  this.messageRef.push(
    { content:this.state.content,
      roomId:this.props.activeRoom.key,
      sentAt:this.props.firebase.database.ServerValue.TIMESTAMP,
      username:this.props.user.displayName
    });

}

 render(){
  return(
    <section>
      <section>
        <ul className="message-list" id="activeRoom">
          {
            this.state.displayedMessages.map((message, index) =>
              <li className="message" key={index} >
                <div className="content">{message.content}</div>
                <div className="username">from: {message.username}</div>
                <div className="timestamp">sent:{message.sentAt}</div>
                <div className="timestamp">roomId:{message.roomId}</div>
              </li>
            )
          }
        </ul>
      </section>
      <section className="send-message">
         {  !this.props.activeRoom ?
              <h3>Select a room to begin chatting</h3>
            :
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input type="text" value={this.state.content} onChange={(e) => this.handleChange(e)} />
              <input type="submit" value="Send Message" />
            </form>

          }
      </section>
    </section>
  );
 }
}

export default MessageList;
