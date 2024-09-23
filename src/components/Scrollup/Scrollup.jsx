import React, { useEffect, useState } from 'react';
import "./Scrollup.css";

const Scrollup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;


            if (scrollY >= 560) {
                if (scrollY < lastScrollY) {

                    setIsVisible(true);
                } else {

                    setIsVisible(false);
                }
            } else {
                
                setIsVisible(false);
            }

            setLastScrollY(scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            {isVisible && (
                <a href="#" className='scrollup show-scroll'>
                    <i className='uil uil-arrow-up scrollup_icon'></i>
                </a>
            )}
        </>
    );
}

export default Scrollup;
