import React from "react";
import { BiPhone } from "react-icons/bi";
import logo from "@/src/logo.svg";

const Footer = () => {
    return (
        <footer className="px-24 bg-[#F9FAFB] py-10 divide-y">
            <div className="flex justify-between sm:flex-nowrap flex-wrap pb-8">
                <img src={logo} alt="logo" />
                <h1 className="font-semibold w-[272px]">
                    We Are Providing{" "}
                    <span className="underline underline-offset-2 text-thePrimary">
                        Best and Affordable
                    </span>{" "}
                    Health Care.
                </h1>
            </div>
            <div className="flex justify-between pt-8">
                <p>&copy; 2022 Klinik Asyifa Mariuk</p>
                <ul className="flex gap-x-6">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Articles</li>
                </ul>
                <p className="flex gap-x-2">
                    <BiPhone
                        style={{
                            width: "inherit",
                            height: "inherit",
                            display: "inherit",
                        }}
                    />
                    <span>0800-10056-5730</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
