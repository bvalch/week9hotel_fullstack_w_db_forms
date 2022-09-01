const bURL = "http://localhost:9000/api/bookings/"


export const getBookings = () => {
    return (fetch(bURL)).then((res) => res.json())

};


export const postBooking = (bookingToPost) => {
    return fetch(bURL, {
        method: 'POST',
        body: JSON.stringify(bookingToPost),
        headers: { 'Content-Type': 'application/JSON' }
    })
        .then(res => res.json())
};

export const deleteBooking = (id) => {
    return fetch(bURL + id, {
        method: 'DELETE'
    })

}


export const updateBookings = (id, bookingToUpdate) => {
    return fetch(bURL + id, {
        method: 'PUT',
        body: JSON.stringify(bookingToUpdate),
        headers: { 'Content-Type': 'application/JSON' }
    })
    .then(res=>res.json())
    // is this necessary?
}

