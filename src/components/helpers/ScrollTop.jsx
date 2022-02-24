import React, { useEffect, useState } from "react";
import chevronUp from "../../media/circle-chevron-up-solid.svg"

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="position-fixed bottom-0 end-0">
            {isVisible && (
                <img  onClick={scrollToTop} className="scroll__top" src={chevronUp} alt=""/>
            )}
        </div>
    );
}
