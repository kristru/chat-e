import React, {Component} from 'react';


 class RoomsList extends Component {
  constructor(props){
    super(props);
    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.state = {
      rooms:[],
      newRoomName: '',
      activeRoom:'',
    };
  }

  componentDidMount(room) {
    //firebase read function (.on) of Database snapshots
     this.roomsRef.on('child_added', snapshot => {
       //sets room to a snapshot
       const room = snapshot.val();
       //updates the dom by creating a new array with the room
       this.setState({rooms: this.state.rooms.concat( room )});
     });
   }

   handleChange(e){
     //this is setting the state of newRoomName
     this.setState({newRoomName:e.target.value});
     console.log('newRoomName:' + this.state.newRoomName)
   }

   handleSubmit(e) {
     //stops the page from refreshing
     e.preventDefault();
     //if this field is blank do nothing
     if(!this.state.newRoomName) {return};
     //push() input value to this.roomsRef
     console.log('This is what will be pushed: ' + this.state.newRoomName);
     this.roomsRef.push({name:this.state.newRoomName});
     //clear input field
     this.setState({newRoomName: ''});
   }

   handleClick(e){
     e.preventDefault();
     console.log("li clicked");
   }


  render(){
    return(
      <section>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text"
            name="name"
            value={this.state.newRoomName}
            onChange={ (e) => this.handleChange(e)}
          />
          <input type="submit" value="Create New Room" />
        </form>
        <ul className="rooms-list">
          {
            this.state.rooms.map((room, index) =>
              <li className='room' key={ index } onClick={this.handleClick}>{room.name}</li>
            )
          }
        </ul>
      </section>
    );
  }
}

export default RoomsList;
