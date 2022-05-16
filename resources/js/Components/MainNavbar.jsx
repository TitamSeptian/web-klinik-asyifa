import React, { useState, useEffect } from "react";
import logo from "@/src/logo.svg";
import Button from "@/Components/Button";

const MainNavbar = () => {
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setBg("bg-white") : setBg("bg-transparent");
        window.scrollY > 10 ? setDisplay("sticky") : setDisplay("absolute");
    };
    const [bg, setBg] = useState("bg-transparent");
    const [display, setDisplay] = useState("absolute");
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    });
    return (
        <nav
            className={`${display} top-0 z-30 ${bg} h-[80px] w-full px-24 overflow-hidden flex items-center justify-between transition-all duration-300 ease-in-out`}
        >
            <div className="flex gap-x-2 items-center">
                <img src={logo} alt="logo" />
                <ul className="flex gap-x-5 font-semibold">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Articles</li>
                </ul>
            </div>
            <div className="flex gap-x-2 items-center">
                <Button variant="secondary" type="button" moreClass="mr-2">
                    Secondary
                </Button>
                <Button variant="primary" type="button">
                    Primary Button
                </Button>
            </div>
        </nav>
    );
};

export default MainNavbar;
