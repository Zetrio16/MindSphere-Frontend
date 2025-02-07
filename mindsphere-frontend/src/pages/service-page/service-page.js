"use client"
import { useState } from "react"
import "./service-page.css"

export default function ServicesPage() {
    const [services] = useState([
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
            charges: "5,000 PKR/Session",
        },
    ])

    const routeToContactForm = () => {
        window.location.href = "/bookingForm"
    }
    return (
        <div className="services-container">
            <div className="services-header">
                <h1 className="services-title">
                    Our <span className="services-title-italic">Services</span>
                </h1>
            </div>
            <p className="details"> MindSphere offers a range of specialized services at highly
                affordable rates to cater to the diverse needs of children and
                their families. Below is a breakdown of the services we provide
                and their respective charges:
            </p>
            <div className="services-grid">

                {services.map((service) => (
                    <div key={service.id} className="service-cards">
                        <div className="service-content">
                            <h2 className="service-title">{service.title}</h2>
                            <div className="service-info">
                                <p className="service-charges">{service.charges}</p>
                            </div>
                        </div>
                        <button className="book-now-btn" onClick={routeToContactForm}>Book Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

