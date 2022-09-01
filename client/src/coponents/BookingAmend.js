import React, { useState } from "react";
import '../css/Booking.css'

const BookingAmend = ({ bookingToAmend, onChangeOfDetails }) => {


    const [name = bookingToAmend.name, setName] = useState()
    const [email = bookingToAmend.email, setEmail] = useState()


    const handleSubmit = (event) => {
        event.preventDefault();
        const bookingBody = { name: name, email: email }
        onChangeOfDetails(bookingToAmend._id, bookingBody)
    }


    const onNameChange = (event) => {
        const newName = event.target.value
        setName(newName)
    }

    const onEmailChange = (event) => {
        const newEmail = event.target.value
        setEmail(newEmail)
    }


    if (bookingToAmend != null || bookingToAmend != false) {
        return (
            <><h2 id='h2amend'>Amend Booking</h2>
                <div id='formtop'>
                
                    <div id='formtext'>
                <label htmlFor="name">Amend Name:</label>
                <label htmlFor="name">Amend Email:</label>
                </div>
                    <form id='form' method='post' onSubmit={handleSubmit}>
                       
                        <input onChange={onNameChange} type="text" id="name" value={name} required />
                        
                        <input onChange={onEmailChange} type="email" id="email" value={email} required />
                        <input type="submit" value="Submit Changes" id="save" />
                    </form>
                    
                </div>
            </>
        )
    }
};
export default BookingAmend;