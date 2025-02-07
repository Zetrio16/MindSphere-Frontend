import { useEffect, useRef, useState } from "react"
import "./banner.css"

export default function Banner() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const bannerRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset
            setScrollPosition(position)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="page-wrapper">
            <div className="banner-container" ref={bannerRef}>
                <div
                    className="banner"
                    style={{
                        transform: `translateY(${scrollPosition * 0.5}px)`,
                    }}
                >
                    <div className="banner-content">
                        <h1 className="banner-title">
                            Transforming <br/> <span className="highlight">Lives</span>
                        </h1>
                        <p className="banner-subtitle">Learning Support Center</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

