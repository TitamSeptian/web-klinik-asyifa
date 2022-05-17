import React, { useState, useEffect } from "react";
import logo from "@/src/logo.svg";
import Button from "@/Components/Button";
import { InertiaLink } from "@inertiajs/inertia-react";

const MainNavbar = ({ justSticky }) => {
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setBg("bg-white") : setBg("bg-transparent");
        window.scrollY > 10
            ? setDisplay("sticky")
            : setDisplay(justSticky ? "sticky" : "absolute");
    };
    const [bg, setBg] = useState("bg-transparent");
    const [display, setDisplay] = useState(justSticky ? "sticky" : "absolute");
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
                    <li>
                        <InertiaLink href={route("home")}>Home</InertiaLink>
                    </li>
                    <li>
                        <InertiaLink href={route("about")}>About</InertiaLink>
                    </li>
                    <li>
                        <InertiaLink href="/">Services</InertiaLink>
                    </li>
                    <li>
                        <InertiaLink href={route("articles")}>
                            Articles
                        </InertiaLink>
                    </li>
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
