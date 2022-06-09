import React from "react";
import Navbar from "../../Components/MainNavbar";
import ImagePost from "@/src/blog-post.png";
import ImagePost2 from "@/src/ImagePost.png";
import ImagePost3 from "@/src/ImagePost2.png";
import Footer from "../../Components/Footer";
import {
    AiFillFacebook,
    AiOutlineTwitter,
    AiFillLinkedin,
} from "react-icons/ai";
import { IoCopyOutline } from "react-icons/io5";
import { Head } from "@inertiajs/inertia-react";

const Articles = ({ post }) => {
    console.log(post);
    return (
        <>
            <Head>
                <title>Klinik Asyifa Mariuk</title>
            </Head>
            <Navbar justSticky={true} />
            <section className="md:px-24 px-4 md:mt-20 mt-5">
                <div className="flex flex-col gap-y-6">
                    <div className="bg-gray-50 rounded-full px-3 py-1 text-gray-500 font-semibold justify-self-start self-start text-xs">
                        {/* <span className="bg-white rounded-full px-3 py-0.5 mr-2">
                            Product
                        </span> */}
                        2 min read
                    </div>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
                        {post.title}
                    </h1>
                    <p className="text-gray-400 text-md md:w-2/3 w-full">
                        {post.mini_body}
                    </p>
                </div>
            </section>
            <section className="md:px-24 px-4 mt-10">
                <div className="flex flex-col gap-y-6">
                    <img
                        src={post.cover}
                        alt={post.title}
                        className="w-full h-auto rounded-xl"
                    />
                    <div className="flex justify-between items-center flex-col md:flex-row gap-3">
                        <div className="flex gap-x-3 font-semibold">
                            <div className="flex flex-col gap-y-3">
                                <h1 className="text-sm text-gray-400">
                                    Ditulis oleh
                                </h1>
                                <h1 className="text-thePrimary">
                                    {post.user.name}
                                </h1>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <h1 className="text-sm text-gray-400">
                                    Dipublikasi pada
                                </h1>
                                <h1 className="text-thePrimary">
                                    {post.published_at}
                                </h1>
                            </div>
                        </div>
                        <div className="flex gap-x-3">
                            <button className="text-gray-400 border-2 border-gray-100 flex rounded-md items-center font-semibold p-2 gap-2">
                                <IoCopyOutline
                                    style={{
                                        width: "inherit",
                                        height: "inherit",
                                    }}
                                />
                                Copy Link
                            </button>
                            <button className="text-gray-400 border-2 border-gray-100 rounded-md flex items-center font-semibold p-2 gap-2">
                                <AiOutlineTwitter
                                    style={{
                                        width: "inherit",
                                        height: "inherit",
                                    }}
                                    size={20}
                                    className="text-thePrimary"
                                />
                            </button>
                            <button className="text-gray-400 border-2 border-gray-100 rounded-md flex items-center font-semibold p-2 gap-2">
                                <AiFillFacebook
                                    style={{
                                        width: "inherit",
                                        height: "inherit",
                                    }}
                                    size={20}
                                    className="text-thePrimary"
                                />
                            </button>
                            <button className="text-gray-400 border-2 border-gray-100 rounded-md flex items-center font-semibold p-2 gap-2">
                                <AiFillLinkedin
                                    style={{
                                        width: "inherit",
                                        height: "inherit",
                                    }}
                                    size={20}
                                    className="text-thePrimary"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:px-24 px-4 mt-20">
                <div className="flex gap-5 flex-wrap">
                    <div className="md:w-2/3 w-full order-1 flex flex-col gap-y-5 md:max-w-[60%] max-w-full text-gray-400">
                        <article
                            className="prose"
                            dangerouslySetInnerHTML={{
                                __html: post.body,
                            }}
                        ></article>
                    </div>
                    <div className="md:w-1/3 w-full order-2">
                        <div className="flex flex-col gap-y-3 p-7 shadow-xl rounded-xl max-w-[384px] mx-auto">
                            <span>
                                <svg
                                    width="56"
                                    height="56"
                                    viewBox="0 0 56 56"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
                                        fill="#F2F4F7"
                                    />
                                    <path
                                        d="M39.6668 16.3333L26.8335 29.1666M39.6668 16.3333L31.5002 39.6666L26.8335 29.1666M39.6668 16.3333L16.3335 24.4999L26.8335 29.1666"
                                        stroke="#B42318"
                                        stroke-width="2.33333"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </span>
                            <h1 className="text-lg font-semibold">
                                Artikel mingguan
                            </h1>
                            <p className="text-gray-400">
                                Tidak spam. Dapatkan tips dan artikel menarik
                                setiap minggunya
                            </p>
                            <input
                                type="email"
                                className="rounded-lg border-gray-300 border-2 w-full block focus:border-thePrimary transition-all duration-100 ease-in"
                                placeholder="Masukan Email"
                            />
                            <p className="text-sm text-gray-400">
                                Read about our{" "}
                                <span className="underline underline-offset-1">
                                    privacy policy
                                </span>
                            </p>
                            <button className="block w-full text-center text-white bg-error-600 py-2 rounded-lg">
                                Langganan
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Articles;
