import React from 'react';
import TripIndexItem from './trip_index_item';

 export default class TripsIndex extends React.Component {
   constructor(props) {
     super(props);
   }

   componentDidMount() {
     this.props.fetchTrips();
   }

   render() {
     const trips = this.props.trips.map(trip => (
       <TripIndexItem key={trip.id} trip={trip}/>
     ));
     return (
       <ul>
         {trips}
       </ul>
     );
   }
 }
