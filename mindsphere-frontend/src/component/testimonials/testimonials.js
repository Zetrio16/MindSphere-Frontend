import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade} from 'swiper/modules'
import { Star } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import "swiper/css/autoplay"
import 'swiper/css/effect-fade'
import './testimonials.css'
import './swiper-custom.css'

export default function TestimonialSlider() {
    const [testimonials, setTestimonials] = useState([
        {
            id: 1,
            quote: "The therapists at MindSphere truly care about your well-being. I've felt heard and supported every step of the way.",
            author: "Tehreem R. B.",
            rating: 5,
            title: "A safe and comforting space."
        },
        {
            id: 2,
            quote: "The RIASEC test gave me clarity on my strengths and career interests. I feel confident about my path now.",
            author: "Ali M.",
            rating: 5,
            title: "Highly recommend their career guidance!"
        },
        {
            id: 3,
            quote: "I've been able to manage my anxiety better with the help of MindSphere's therapists. I'm grateful for their support.",
            author: "Sam K.",
            rating: 5,
            title: "Transformative care."
        },
        {
            id: 4,
            quote: "The remedial therapy sessions have made a huge difference in my son’s learning and confidence. Thank you, MindSphere!",
            author: "Saad S.",
            rating: 5,
            title: "Amazing support for my child!"
        }
    ])

    // Function to add new testimonial
    const addTestimonial = (newTestimonial) => {
        setTestimonials([...testimonials, {
            id: testimonials.length + 1,
            ...newTestimonial
        }])
    }

    // Function to remove testimonial
    const removeTestimonial = (id) => {
        setTestimonials(testimonials.filter(testimonial => testimonial.id !== id))
    }

    // Function to update testimonial
    const updateTestimonial = (id, updatedData) => {
        setTestimonials(testimonials.map(testimonial =>
            testimonial.id === id ? { ...testimonial, ...updatedData } : testimonial
        ))
    }

    return (
        <div className="container text-center">
            <h2>What Our Clients
                <span> Say </span>
            </h2>

            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                speed={1000}
                fadeEffect={{
                    crossFade: true
                }}
                loop={true}
                className="relative"
            >

                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="d-flex justify-center align-center swiper-box">
                            <h3 className="">
                                {testimonial.title}
                            </h3>
                            <p className="">
                                {testimonial.quote}
                            </p>
                            <div className="mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} style={{ color: '#000', fill: '#000' }} />
                                ))}
                            </div>
                            <p className="font-medium">
                                {testimonial.author}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}

                <button className="swiper-button-prev" />
                <button className="swiper-button-next" />
            </Swiper>
        </div>
    )
}
