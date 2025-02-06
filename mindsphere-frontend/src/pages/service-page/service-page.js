"use client"
import "./service-page.css"

export default function ServicesPage() {
    const services = [
        {
            id: 1,
            title: "Career Counseling",
            duration: "1 hr",
            price: "Rs 3,000",
        },
        {
            id: 2,
            title: "Specific Learning Disorder",
            duration: "1 hr",
            price: "Rs 2,500",
        },
        {
            id: 3,
            title: "Psychotherapy and Counseling",
            duration: "45 min",
            price: "Rs 2,500",
        },
        {
            id: 4,
            title: "Neurodevelopmental Delays",
            duration: "1 hr",
            price: "Rs 2,500",
        },
    ]

    return (
        <div className="services-container">
            <div className="services-header">
                <h1 className="services-title">
                    Our <span className="services-title-italic">Services</span>
                </h1>
            </div>

            <div className="services-grid">
                {services.map((service) => (
                    <div key={service.id} className="service-cards">
                        <div className="service-content">
                            <h2 className="service-title">{service.title}</h2>
                            <div className="service-info">
                                <p className="service-duration">{service.duration}</p>
                                <p className="service-price">{service.price}</p>
                            </div>
                        </div>
                        <button className="book-now-btn">Book Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

