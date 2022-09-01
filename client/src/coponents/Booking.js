import React from 'react';
import '../css/Booking.css'



const Booking = ({ booking,onDelete,onChangeCheckInStatus,onBookingAmended }) => {
    

    const handleRemove=()=>{
    onDelete(booking._id)
    }
    const handleCheckIn=()=>{
        onChangeCheckInStatus(booking._id)
    
    
    }
    const handleAmend=()=>{
        onBookingAmended(booking)
    
    }




    return (

        <>
            <div id='bookingcard'>
                {booking._id}

                <p>Customer Name : {booking.name}</p>
                <p>Customer Email: {booking.email}</p>
                {(booking.checked_in) ? <p>Checked In</p> : <p>Not Checked In</p>}
                <button onClick={handleRemove}>Remove</button>
                <button onClick={handleCheckIn}>{(booking.checked_in)? 'Check Out':'Check In'} </button>
                <button onClick={handleAmend}>Amend details</button>
            </div>
            
        </>
    )


};

export default Booking;
