import React from "react";
import { BiPhone } from "react-icons/bi";
import logo from "@/src/logo.svg";
import { InertiaLink } from "@inertiajs/inertia-react";

const Footer = () => {
    return (
        <footer className="md:px-24 px-4 bg-[#F9FAFB] py-10 divide-y grid grid-cols-1 md:grid-cols-1 justify-between gap-3">
            <div className="flex justify-between sm:flex-nowrap flex-wrap pb-8 gap-3">
                <img src={logo} alt="logo" />
                <h1 className="font-semibold w-[272px]">
                    Membangun{" "}
                    <span className="underline underline-offset-2 text-thePrimary">
                        Keluarga Sehat
                    </span>{" "}
                    dan{" "}
                    <span className="underline underline-offset-2 text-thePrimary">
                        Sejahtera
                    </span>{" "}
                    dalam Menyukseskan Indonesia Sehat
                </h1>
            </div>
            <div className="flex justify-between pt-8 sm:flex-nowrap flex-wrap gap-3">
                <p>&copy; 2022 Klinik Asyifa Mariuk</p>
                <ul className="flex gap-x-6">
                    <li>
                        <InertiaLink href={route("home")}>Home</InertiaLink>
                    </li>
                    <li>
                        <InertiaLink href={route("about")}>About</InertiaLink>
                    </li>
                    {/* <li>Services</li> */}
                    <li>
                        <InertiaLink href={route("articles")}>
                            Articles
                        </InertiaLink>
                    </li>
                    <li>
                        <InertiaLink href={route("gallery")}>
                            Gallery
                        </InertiaLink>
                    </li>
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
