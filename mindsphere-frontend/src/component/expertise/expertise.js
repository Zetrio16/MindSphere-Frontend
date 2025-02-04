import React from 'react'
import './expertise.css'

const Expertise = () => {
    return (
        <>
            <div className="container expertise">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <h2>Our Expertise</h2>
                        <p>At MindSphere, we are dedicated to enhancing mental well-being through specialized services in psychotherapy, remedial therapy, and career guidance. Our experienced professionals combine empathy and evidence-based practices to help individuals navigate challenges such as stress, anxiety, and developmental hurdles, fostering resilience and personal growth. </p>
                        <p> Whether you're seeking support to overcome mental health concerns, guidance to unlock your career potential, or tailored solutions for developmental needs, we are here to help.
                        </p>
                    </div>

                    <div className="col-lg-6">
                        <div className="expertise-img">
                            <img src="/images/expertise/3.png" alt="Expertise" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Expertise