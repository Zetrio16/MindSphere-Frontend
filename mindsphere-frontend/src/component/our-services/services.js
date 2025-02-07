"use client"

import { useState } from "react"
import "./services.css"
import { useNavigate } from "react-router-dom"

const Services = () => {
    const navigate = useNavigate()

    const [services] = useState([
        {
            id: 1,
            title: "Psychotherapy & Counselling",
            description:
                "Providing essential mental health support to help individuals manage stress, build resilience, and improve their overall well-being.",
        },
        {
            id: 2,
            title: "Specific Learning Disorders",
            description:
                "Developing Individualized Education Plans (IEPs) to support students with learning disorders and low IQ, helping them achieve their full potential.",
        },
        {
            id: 3,
            title: "Neurodevelopmental Delays",
            description:
                "Offering targeted behavior and speech therapy to enhance social skills, emotional regulation, and communication for children with developmental delays.",
        },
        {
            id: 4,
            title: "Career Guidance & Counselling",
            description:
                "Using psychometric tools to guide individuals in making informed career choices based on their strengths and aspirations.",
        },
    ])

    const serviceDirect = () => {
        navigate("/services")
    }

    return (
        <div className="service-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 services-headers">
                        <h2>
                            Our <span>Services</span>
                        </h2>
                        <button className="see-all-btn" onClick={serviceDirect}>
                            See All
                        </button>
                        <div className="services-image">
                            <img
                                src="https://media.istockphoto.com/id/1015399630/photo/making-profile.jpg?s=612x612&w=0&k=20&c=2xSYvnRqJefeWzywD-auNLd2-0HbuTkFSLJ1QBK7btg="
                                alt="Services"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            {services.map((service) => (
                                <div key={service.id} className="col-lg-6">
                                    <div className="service-card">
                                        <span>{service.id.toString().padStart(2, "0")}</span>
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

