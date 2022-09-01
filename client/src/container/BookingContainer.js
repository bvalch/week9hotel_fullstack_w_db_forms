import React, { useState, useEffect } from 'react';
import { getBookings, postBooking, deleteBooking, updateBookings } from '../coponents/bookingsService';
import BookingsList from '../coponents/BookingsList';
import BookingAmend from '../coponents/BookingAmend';
import '../css/Booking.css'


const BookingContainer = () => {
    const [bookings, setBookings] = useState([]);
    const [bookingToAmend, setBookingToAmend] = useState();

    useEffect(() => {
        getBookings().then((data) => setBookings(data))

    }, [])

    const reloadPage = async () => {
        return await getBookings().then((data) => setBookings(data))
    }

    const onDelete = async (id) => {
        await deleteBooking(id)
        const bookingsCopy = [...bookings]
        const filteredArry = bookingsCopy.filter((booking) => booking._id != id)
        setBookings(filteredArry)
    }

    const onChangeCheckInStatus = (id) => {
        const bookingToChange = bookings.filter((booking) => booking._id === id)
        bookingToChange[0].checked_in = !bookingToChange[0].checked_in
        updateBookings(id, { checked_in: bookingToChange[0].checked_in })
        const bookingsCopy = bookings.filter((booking) => booking._id != id)
        bookingsCopy.push(bookingToChange[0])
        setBookings(bookingsCopy)
    }
    const onBookingAmended = async (booking) => {
        await setBookingToAmend(booking)
    }

    const onChangeOfDetails = async (id, bookingBody) => {
        await updateBookings(id, { name: bookingBody.name, email: bookingBody.email })
        await reloadPage();
        setBookingToAmend()

    }




    return (
        <>
            <>
                <div id='bookamend'>
                    {(bookingToAmend) ? <BookingAmend bookingToAmend={bookingToAmend} onChangeOfDetails={onChangeOfDetails} /> : null}
                </div>
            </>
            <BookingsList bookings={bookings} onDelete={onDelete} onChangeCheckInStatus={onChangeCheckInStatus} onBookingAmended={onBookingAmended} />



            {/* <>
            <BookingAmend bookings={bookings}/>
            </> */}


        </>

    )


};

export default BookingContainer;




