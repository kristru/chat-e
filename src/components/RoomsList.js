import React, {Component} from 'react';


 class RoomsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      rooms:[1:shopping, 2:sports, 3:cooking],
    };
  }

  this.roomsRef = this.props.firebase.database().ref('rooms');

  componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       console.log(snapshot);
     });
   }

  render(){
    return(
      <div>Rooms List Will Goes here</div>
    );
  }
}

export default RoomsList;
