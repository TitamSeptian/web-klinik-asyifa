import React from "react";

const Button = ({ children }) => {
    const btnStyle = {
        primary: ``,
    };
    return <button className="">{children || "button"}</button>;
};

export default Button;
