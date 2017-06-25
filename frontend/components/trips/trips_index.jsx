import React from 'react';

 export default class TripsIndex extends React.Component {
   constructor(props) {
     super(props);
   }

   componentDidMount() {
     this.props.fetchTrips();
   }

   render() {
     console.log(this.props.bookings());
     return null;
   }
 }
