import React from "react";

const Button = ({
    children,
    variant,
    type,
    moreClass,
    moreStyle,
    id,
    icon,
    iconPosition,
}) => {
    const baseStyle = "rounded-md py-2 px-3";
    const btnStyle = {
        primary: `bg-error-600 text-white`,
        secondary: `outline outline-error-300 outline-1 text-error-700`,
    };
    let color = "";
    let ip = iconPosition ?? "left";
    if (variant == "primary") color = btnStyle.primary;
    if (variant == "secondary") color = btnStyle.secondary;
    return (
        <button
            id={id}
            className={`${baseStyle} ${color} ${moreClass}`}
            type={type ?? "button"}
            style={moreStyle}
        >
            {icon && (
                <div className="flex items-center gap-x-2">
                    <span>{ip == "left" ? icon : ""}</span>
                    <span>{children}</span>
                    <span>{ip == "right" ? icon : ""}</span>
                </div>
            )}
            {!icon && (
                <div className="flex items-center gap-x-2">
                    <span>{children}</span>
                </div>
            )}
        </button>
    );
};

export default Button;
