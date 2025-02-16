import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { isTokenValid } from "../../utils/tokenUtils";

const API_URL = process.env.REACT_APP_API_URL.trim();

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);

  const services = [
    {
      id: 1,
      title: "Behaviour Therapy",
      charges: "30,000 PKR/month",
    },
    {
      id: 2,
      title: "Speech Therapy",
      charges: "30,000 PKR/month",
    },
    {
      id: 3,
      title: "Physiotherapy",
      charges: "25,000 PKR/month",
    },
    {
      id: 4,
      title: "Specific Learning Disorder Therapy",
      charges: "20,000 PKR/month",
    },
    {
      id: 5,
      title: "School Readiness Program",
      charges: "20,000 PKR/month",
    },
    {
      id: 6,
      title: "Psychotherapy",
      charges: "2,000 PKR/session",
    },
    {
      id: 7,
      title: "Psychotherapy Monthly Package",
      charges: "20,000 PKR/month",
    },
    {
      id: 8,
      title: "Career Counseling with Psychometric Test",
      charges: "5,000 PKR",
    },
  ]

  const getServiceName = (serviceId) => {
    const service = services.find(s => s.id === parseInt(serviceId));
    return service ? service.title : "Unknown Service";
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!isTokenValid()) {
          return;
      }

        const response = await axios.get(`${API_URL}/admin/bookings`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBookings(response.data.bookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      const token = localStorage.getItem("token");

      if (!isTokenValid()) {
        return;
    }

      await axios.put(
        `${API_URL}/admin/bookings/${bookingId}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update UI
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === bookingId ? { ...booking, status: newStatus } : booking
        )
      );
    } catch (error) {
      console.error("Error updating booking status:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 mt-5 fw-bold">Booking Requests Details</h1>
      <p className="fw-bold mb-4 mt-5">
        Here are the appointment requests from our users, detailing their bookings.
      </p>
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
                <p className="card-text"><strong>Service:</strong> {getServiceName(booking.selectedService)}</p>
                <p className="card-text"><strong>Created At:</strong> {new Date(booking.createdAt).toLocaleString()}</p>
                <p className="card-text">
                  <strong>Status:</strong>
                  <select
                    className={`badge dropdown-select bg-${booking.status === "approved"
                      ? "success"
                      : booking.status === "rejected"
                        ? "danger"
                        : "warning"
                      } ms-2 border-0`}
                    value={booking.status}
                    onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                  >
                    <option value="pending" className="bg-warning text-dark">Pending</option>
                    <option value="approved" className="bg-success text-light">Approved</option>
                    <option value="rejected" className="bg-danger text-light">Rejected</option>
                  </select>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingDetails;
