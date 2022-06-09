import React from "react";
import Navbar from "../../Components/MainNavbar";
import Footer from "../../Components/Footer";
import post1 from "@/src/post1.png";
import post2 from "@/src/post2.png";
import post3 from "@/src/post3.png";
import BlogItem from "../../Components/BlogItem";
import { Head, InertiaLink } from "@inertiajs/inertia-react";

const Gallery = ({ galleries }) => {
    return (
        <>
            <Head>
                <title>Klinik Asyifa Mariuk</title>
            </Head>
            <Navbar justSticky={true} />
            <section className="md:px-24 px-4 my-20">
                <div className="container flex flex-col gap-y-5 items-center">
                    <span className="block text-sm font-semibold text-gray-400">
                        Album Kami
                    </span>
                    <h1 className="md:text-6xl text-2xl sm:text-3xl font-bold self-start md:self-auto">
                        Gallery
                    </h1>
                </div>
            </section>
            <section className="md:px-24 px-4 my-10">
                <h1 className="text-2xl font-bold">Gallery Klinik Asyifaa</h1>
                <div className="gap-4 space-y-4 sm:columns-2 md:columns-3">
                    {galleries.map((gallery) => (
                        <div className="relative overflow-hidden rounded-2xl group">
                            <div className="absolute z-10 flex space-x-4 top-4 left-4">
                                <button className="scale-0 btn btn-icon group-hover:scale-100 group-hover:cursor-pointer btn-detail">
                                    <i className="bx bx-show" />
                                </button>
                            </div>
                            <img
                                className="relative z-0 w-full transition-all duration-300 hover:scale-110"
                                src={gallery.path_image}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Gallery;
