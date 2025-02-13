import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const BookingDetails = () => {
  const [bookings, setBookings] = useState([
    {
      firstName: "John Doe",
      phone: "123-456-7890",
      email: "johndoe@example.com",
      date: "2024-02-14",
      time: "10:30 AM",
      selectedService: "Haircut",
      status: "pending",
      createdAt: "2024-02-10T12:00:00Z",
    },
    {
      firstName: "Jane Smith",
      phone: "987-654-3210",
      email: "janesmith@example.com",
      date: "2024-02-15",
      time: "02:00 PM",
      selectedService: "Facial",
      status: "approved",
      createdAt: "2024-02-11T10:15:00Z",
    },
    {
      firstName: "Emily Johnson",
      phone: "456-789-1234",
      email: "emilyj@example.com",
      date: "2024-02-16",
      time: "04:45 PM",
      selectedService: "Massage",
      status: "rejected",
      createdAt: "2024-02-12T08:30:00Z",
    },
  ]);

  useEffect(() => {
    // const fetchBookings = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:5000/api/bookings");
    //     setBookings(response.data);
    //   } catch (error) {
    //     console.error("Error fetching bookings:", error);
    //   }
    // };

    // fetchBookings();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 mt-5 fw-bold">Booking Requests Details</h1>
      <p className="fw-bold mb-4 mt-5">Here are the appointment requests from our users, detailing their bookings.</p>
      <div className="row">
        {bookings.map((booking, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-uppercase">{booking.firstName}</h5>
                <p className="card-text"><strong>Phone:</strong> {booking.phone}</p>
                <p className="card-text"><strong>Email:</strong> {booking.email}</p>
                <p className="card-text"><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                <p className="card-text"><strong>Time:</strong> {booking.time}</p>
                <p className="card-text"><strong>Service:</strong> {booking.selectedService}</p>
                <p className="card-text">
                  <strong>Status:</strong>
                  <span
                    className={`badge bg-${
                      booking.status === "approved"
                        ? "success"
                        : booking.status === "rejected"
                        ? "danger"
                        : "warning"
                    } ms-2`}
                  >
                    {booking.status}
                  </span>
                </p>
                <p className="card-text"><strong>Created At:</strong> {new Date(booking.createdAt).toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingDetails;
