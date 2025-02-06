import React from "react";
import "./services.css"; // Import the CSS file
// import serviceImage from "./service-image.jpg"; // Replace with actual image path

const Services = () => {
    return (
        <div className="service-sec">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-6 services-headers">
                        <h2>Our <span>Services</span></h2>
                        <button className="see-all-btn">See All</button>
                        <div className="services-image">
                            <img src="https://media.istockphoto.com/id/1015399630/photo/making-profile.jpg?s=612x612&w=0&k=20&c=2xSYvnRqJefeWzywD-auNLd2-0HbuTkFSLJ1QBK7btg=" alt="Services" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="service-card">
                                    <span>01</span>
                                    <h3>Psychotherapy & Counselling</h3>
                                    <p>Providing essential mental health support to help individuals manage stress, build resilience, and improve their overall well-being.</p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="service-card">
                                    <span>02</span>
                                    <h3>Specific Learning Disorders</h3>
                                    <p>Developing Individualized Education Plans (IEPs) to support students with learning disorders and low IQ, helping them achieve their full potential.</p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="service-card">
                                    <span>03</span>
                                    <h3>Neurodevelopmental Delays</h3>
                                    <p>Offering targeted behavior and speech therapy to enhance social skills, emotional regulation, and communication for children with developmental delays.</p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="service-card">
                                    <span>04</span>
                                    <h3>Career Guidance & Counselling</h3>
                                    <p>Using psychometric tools to guide individuals in making informed career choices based on their strengths and aspirations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
