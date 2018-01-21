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
       this.setState({rooms: this.state.rooms.concat( room )});
       //GETS UNDEFINED
       console.log(room);
     });
   }

  render(){
    return(
      <ul className="rooms-list">
        {
          this.state.rooms.map((room,index) =>
            //GETS BLANK LI <li key={index}>{this.state.rooms[index]}</li>
            //GETS AN UNDEFINED ERROR<li key={index}>{this.state.rooms[index].value}</li>
            //GETS BLANK LI <li key={index}>{this.state.room}</li>
            <li key={index}>{index}</li>
          )
        }
      </ul>
    );
  }
}

export default RoomsList;
