import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RatingItem = ({ children, name, stars }) => {
    let emptyStars = 5 - stars;
    return (
        <div className="flex flex-col border-2 rounded-2xl p-6 gap-y-4 w-[384px]">
            <h1 className="font-semibold text-xl">{name}</h1>
            <div className="flex">
                {[...Array(stars).keys()].map((e, i) => {
                    return (
                        <span key={i}>
                            {i < stars ? (
                                <AiFillStar
                                    className="text-[#FD853A]"
                                    style={{
                                        width: "inherit",
                                        height: "inherit",
                                    }}
                                />
                            ) : (
                                <AiOutlineStar
                                    className="text-[#FD853A]"
                                    style={{
                                        width: "inherit",
                                        height: "inherit",
                                    }}
                                />
                            )}
                        </span>
                    );
                })}
                {[...Array(emptyStars).keys()].map((e, i) => {
                    return (
                        <span key={i}>
                            {i < emptyStars ? (
                                <AiOutlineStar
                                    className="text-[#FD853A]"
                                    style={{
                                        width: "inherit",
                                        height: "inherit",
                                    }}
                                />
                            ) : (
                                <AiFillStar
                                    className="text-[#FD853A]"
                                    style={{
                                        width: "inherit",
                                        height: "inherit",
                                    }}
                                />
                            )}
                        </span>
                    );
                })}
            </div>
            <p className="text-gray-400 text-md">{children}</p>
        </div>
    );
};

export default RatingItem;
