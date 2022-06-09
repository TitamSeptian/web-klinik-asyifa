import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const BlogItem = ({
    children,
    img,
    title,
    author,
    publish,
    seeDetail,
    tags,
}) => {
    return (
        <div className="flex flex-col gap-y-5 w-[384px] h-full space-y-4">
            <div className=" overflow-hidden h-[240px] w-full">
                <img
                    src={img}
                    alt="post image"
                    className="max-w-full h-full object-cover rounded-xl"
                />
            </div>
            <span className="text-thePrimary font-semibold text-sm">
                {author} • {publish}
            </span>
            <h1 className="text-xl font-semibold flex justify-between items-center">
                <span>{title}</span>
                <InertiaLink href={seeDetail}>
                    <FiArrowUpRight
                        className="inline"
                        style={{
                            width: "inherit",
                            height: "inherit",
                        }}
                    />
                </InertiaLink>
            </h1>
            <p className="text-gray-400 text-md">{children}</p>
            {/* tags */}
            <div className="flex gap-3">
                {tags.map((tag) => (
                    <div className="rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start">
                        {tag.tag.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogItem;
