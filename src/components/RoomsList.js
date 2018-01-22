import React, {Component} from 'react';


 class RoomsList extends Component {
  constructor(props){
    super(props);
    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.state = {
      rooms:[],
    };
  }

  componentDidMount(room) {
     this.roomsRef.on('child_added', snapshot => {
       console.log(snapshot);
       const room = snapshot.val();
       this.setState({rooms: this.state.rooms.concat( room )});
     });
   }

  render(){
    return(
      <ul className="rooms-list">
        {
          this.state.rooms.map((room, index) =>
            <li className='room' key={index}>{room.name}</li>
          )
        }
      </ul>
    );
  }
}

export default RoomsList;
