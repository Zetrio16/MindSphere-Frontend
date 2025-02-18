"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import "./bookingForm.css"
import { isTokenValid } from "../../utils/tokenUtils"

const API_URL = process.env.REACT_APP_API_URL.trim();

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

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setFormData((prev) => ({
                ...prev,
                firstName: user.name || "", // Set name from stored user data
                email: user.email || ""     // Set email from stored user data
            }));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const token = localStorage.getItem("token");
    
        if (!token) {
            alert("You must be logged in to submit a booking request.");
            return;
        }

        if (!isTokenValid()) {
            return;
        }
    
        let {
            firstName = "",
            phone = "",
            email = "",
            date = "",
            time = "",
            selectedService = ""
        } = formData;
    
        // 🚀 Trim and sanitize inputs
        firstName = firstName.trim();
        phone = phone.trim();
        phone = `+92${phone}`;
        email = email.trim();
        date = date.trim();
        time = time.trim();
        selectedService = selectedService.trim();
    
        // ✅ Validate Required Fields
        if (!firstName || !phone || !email || !date || !time || !selectedService) {
            alert("All fields are required.");
            return;
        }
    
        // ✅ Validate Email Format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email format.");
            return;
        }
    
        // ✅ Strictly Validate Pakistani Phone Numbers
        const pakistaniPhoneRegex = /^(?:\+92|0)?3[0-9]{9}$/;
        if (!pakistaniPhoneRegex.test(phone)) {
            alert("Invalid phone number. Use format +923XX-XXXXXXX or 03XX-XXXXXXX.");
            return;
        }
    
        // ✅ Validate Date Format (YYYY-MM-DD)
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(date)) {
            alert("Invalid date format. Use YYYY-MM-DD.");
            return;
        }
    
        // ✅ Validate Time Format (HH:mm)
        const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
        if (!timeRegex.test(time)) {
            alert("Invalid time format. Use HH:mm (24-hour format).");
            return;
        }
    
        try {
            const response = await axios.post(`${API_URL}/student/add-booking`, {
                firstName,
                phone,
                email,
                date,
                time,
                selectedService
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });
    
            alert(response.data.message); // Show success message
    
            // Clear form data except email and firstName
            setFormData({
                firstName,
                phone: "",
                email,
                date: "",
                time: "",
                selectedService: "",
            });
    
        } catch (error) {
            console.error("Booking Submission Failed:", error);
            alert(error.response?.data?.message || "Failed to submit booking.");
        }
    };
    

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

                    <div className="form-group" hidden>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} readOnly />
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

