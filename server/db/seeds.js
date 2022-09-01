use hotelBookings;
db.dropDatabase();


db.bookings.insertMany([

    {
        name: "Joe B.",
    email: "joeb@email.com",
    checked_in: true
    },
    {
        name: "Bill B..",
        email: "billb@email.com",
        checked_in: false

    },
    {
        name: "Jane C.",
        email: "janec@email.com",
        checked_in: true

    }, 
    {
        name: "Rambo was here",
        email: "jrambo@email.com",
        checked_in: true

    }, 
    {
        name: "It is I, who else",
        email: "eeha@email.com",
        checked_in: true

    }, 
    {
        name: "freeWillie",
        email: "icp@email.com",
        checked_in: true

    }

]);
