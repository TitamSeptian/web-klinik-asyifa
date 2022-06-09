import React, { useState, useEffect } from "react";
import logo from "@/src/logo.svg";
import Button from "@/Components/Button";
import { InertiaLink } from "@inertiajs/inertia-react";
import { FaAngleDown, FaBars } from "react-icons/fa";

const MainNavbar = ({ justSticky }) => {
    const listenScrollEvent = () => {
        window.scrollY > 100 ? setBg("bg-white") : setBg("bg-transparent");
        window.scrollY > 100
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
        <header
            className={`${display} top-0 z-30 ${bg} overflow-hidden h-[80px] w-full transition-all duration-300 ease-in-out flex items-center justify-between relative px-4`}
        >
            <nav
                className={`h-auto w-full flex items-center justify-between max-w-screen-xl mx-auto gap-x-6`}
            >
                <div className="flex gap-x-5 items-center self-center">
                    <img src={logo} alt="logo" className="w-24 h-8" />
                </div>
                <div className="hidden py-5 absolute lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full z-[99999]">
                    <ul className="block sm:flex font-semibold gap-5">
                        <li className="hover:underline">
                            <InertiaLink href={route("home")}>Home</InertiaLink>
                        </li>
                        <li className="hover:underline">
                            <InertiaLink href={route("about")}>
                                About
                            </InertiaLink>
                        </li>
                        {/* <li>
                            <InertiaLink href="/">
                                Services{" "}
                                <FaAngleDown
                                    className="inline"
                                    style={{
                                        width: "inherit",
                                        height: "inherit",
                                    }}
                                />{" "}
                            </InertiaLink>
                        </li> */}
                        <li className="hover:underline">
                            <InertiaLink href={route("articles")}>
                                Articles
                            </InertiaLink>
                        </li>
                        <li className="hover:underline">
                            <InertiaLink href={route("gallery")}>
                                Gallery
                            </InertiaLink>
                        </li>
                    </ul>
                </div>
                <Button
                    variant="secondary"
                    type="submit"
                    icon={<FaBars />}
                    iconPosition="left"
                    moreClass="lg:hidden"
                ></Button>
                {/* <div className="flex gap-x-2 items-center self-center">
                    <Button variant="secondary" type="button" moreClass="mr-2">
                        Secondary
                    </Button>
                    <Button variant="primary" type="button">
                        Primary Button
                    </Button>
                </div> */}
            </nav>
        </header>
    );
};

export default MainNavbar;
