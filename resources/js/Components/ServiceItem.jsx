import React from "react";

import { FaArrowRight } from "react-icons/fa";
const ServiceItem = ({ children, title }) => {
    return (
        <div className="flex flex-col border-2 rounded-2xl p-6 gap-y-4">
            <span>
                <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z"
                        fill="#FEE4E2"
                    />
                    <path
                        d="M29 18L19 30H28L27 38L37 26H28L29 18Z"
                        stroke="#B42318"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z"
                        fill="#FEF3F2"
                    />
                </svg>
            </span>
            <h1 className="font-semibold text-xl">{title}</h1>
            <p
                className="text-gray-400 text-md"
                dangerouslySetInnerHTML={{
                    __html: children,
                }}
            ></p>
            <a href="#" className="flex text-thePrimary">
                <span>Learn More</span>
                <FaArrowRight
                    className="ml-2"
                    style={{ width: "inherit", height: "inherit" }}
                />
            </a>
        </div>
    );
};

export default ServiceItem;
