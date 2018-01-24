import React, {Component} from 'react';


 class RoomsList extends Component {
  constructor(props){
    super(props);
    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.state = {
      rooms:[],
      newRoomName: ''
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
     this.setState({newRoomName:e.target.value});
     console.log(e.target.value);
   }

   handleSubmit(e) {
     e.preventDefault();
     //push() input value to this.roomsRef
     console.log(e.target.value);
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
              <li className='room' key={ index }>{room.name}</li>
            )
          }
        </ul>
      </section>
    );
  }
}

export default RoomsList;
