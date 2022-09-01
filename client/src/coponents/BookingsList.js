import React from 'react';
import Booking from './Booking';
import '../css/Booking.css'


const BookingsList=({bookings,onDelete,onChangeCheckInStatus,onBookingAmended})=>{

   const bookingNodes=bookings.map((booking,index)=>{
    return <Booking booking={booking} onDelete={onDelete} onChangeCheckInStatus={onChangeCheckInStatus} key={index} onBookingAmended={onBookingAmended}/>
    
    })

   


return(
    <>
    <div id='bookingNodes'>
    {bookingNodes}
    </div>
    </>
    
    )


};
export default BookingsList;