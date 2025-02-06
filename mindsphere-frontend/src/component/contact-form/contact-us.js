import React, { useState } from 'react'
import './contact-us.css'

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        phone: '',
        email: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <form onSubmit={handleSubmit} className="contact-form">
                    <h2 className="form-title">Contact us</h2>

                    <div className="form-group">
                        <label htmlFor="firstName" className="form-label">
                            First Name <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">
                            Phone
                        </label>
                        <div className="phone-input-wrapper">
                            <span className="phone-prefix">+92</span>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-input phone-input"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
