"use client"
import { useState } from "react"
import "./bookingForm.css"

const BookingForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        selectedService: "",
    })

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

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div className="Form-box">
            <div className="booking-container">
                <h2 className="booking-title">Request for appointment</h2>
                <form onSubmit={handleSubmit} className="booking-form">
                    <div className="form-group">
                        <label htmlFor="firstName" required>
                            First Name <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" required>Phone</label>
                        <div className="phone-input">
                            <span className="phone-prefix">+92</span>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Preferred Date</label>
                        <input type="date" id="date" required name="date" value={formData.date} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="time">Preferred Time</label>
                        <input type="time" id="time" name="time" required value={formData.time} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="selectedService">Select Service</label>
                        <select
                            id="selectedService"
                            name="selectedService"
                            value={formData.selectedService}
                            onChange={handleInputChange}
                        >
                            <option value="">Choose a service</option>
                            {services.map((service) => (
                                <option required key={service.id} value={service.id}>
                                    {service.title} &nbsp;&nbsp;|&nbsp;&nbsp;{service.charges}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="submit-btn">
                        Submit Request
                    </button>
                </form>

                <h6 className="booking-subtitle text-center"><span>NOTE: </span>Our team will promptly reach out to confirm your booking and ensure every detail is tailored to your needs for a seamless experience.</h6>

            </div>
        </div>
    )
}

export default BookingForm

