import React from 'react'
import './expertise.css'
import ExpertiseImg from '../../images/expertise.avif'

const Expertise = () => {
    return (
        <>
            <div className="container expertise">
                <div className="row justify-content-between">
                    <div className="col-lg-5 expertise-content">
                        <h2>Our<span> Expertise</span></h2>
                        <p>At MindSphere, we are dedicated to enhancing mental well-being through specialized services in psychotherapy, remedial therapy, and career guidance. Our experienced professionals combine empathy and evidence-based practices to help individuals navigate challenges such as stress, anxiety, and developmental hurdles, fostering resilience and personal growth. </p>
                        <p> Whether you're seeking support to overcome mental health concerns, guidance to unlock your career potential, or tailored solutions for developmental needs, we are here to help.
                        </p>
                    </div>

                    <div className="col-lg-6">
                        <div className="expertise-img">
                            <img src={ExpertiseImg} alt="Expertise" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Expertise