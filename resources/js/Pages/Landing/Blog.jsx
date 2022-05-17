import React from "react";
import Navbar from "../../Components/MainNavbar";
import Footer from "../../Components/Footer";
import post1 from "@/src/post1.png";
import post2 from "@/src/post2.png";
import post3 from "@/src/post3.png";
import BlogItem from "../../Components/BlogItem";

const Blog = () => {
    return (
        <>
            <Navbar justSticky={true} />
            <section className="px-24 my-20">
                <div className="container flex flex-col gap-y-5 items-center">
                    <span className="block text-sm font-semibold text-gray-400">
                        Our blog
                    </span>
                    <h1 className="text-6xl font-bold">
                        Stories and interviews
                    </h1>
                    <p className="text-gray-400 text-sm max-w-[768px]">
                        Subscribe to learn about new product features, the
                        latest in technology, solutions, and updates
                    </p>
                    <div className="flex gap-x-2 self-center justify-self-center">
                        <input
                            type="email"
                            className="rounded-lg border-gray-300 border-2 w-[360px] block focus:border-thePrimary transition-all duration-100 ease-in"
                            placeholder="Enter Your Email"
                        />
                        <button className="block w-full text-center text-white bg-error-600 py-2 rounded-lg">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-gray-400">
                        We care about your data in our privacy policy
                    </p>
                </div>
            </section>
            <section className="px-24">
                <h1 className="text-2xl font-bold">Recent Blog Post</h1>
                <div className="grid overflow-hidden sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 grid-rows-1 gap-2 mt-10">
                    <div className="sm:row-span-2">
                        <div className="flex flex-col gap-y-5 justify-items-stretch">
                            <div className="rounded-xl">
                                <img
                                    src={post1}
                                    alt="tumbnail post"
                                    className="rounded-xl object-cover w-full"
                                />
                            </div>
                            <h3 className="text-thePrimary font-semibold text-md">
                                Olivia Rhye • 20 Jan 2022
                            </h3>
                            <h1 className="text-xl font-semibold">
                                UX review presentations
                            </h1>
                            <p className="text-gray-400">
                                How do you create compelling presentations that
                                wow your colleagues and impress your managers?
                            </p>
                            <div className="rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start">
                                Covid-19
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-start-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div className="rounded-xl">
                                <img
                                    src={post2}
                                    alt="tumbnail post"
                                    className="rounded-xl object-cover w-full"
                                />
                            </div>
                            <div className="flex flex-col gap-y-5">
                                <h3 className="text-thePrimary font-semibold text-md">
                                    Phoenix Baker • 19 Jan 2022
                                </h3>
                                <h1 className="text-xl font-semibold">
                                    Migrating to Linear 101
                                </h1>
                                <p className="text-gray-400">
                                    Linear helps streamline software projects,
                                    sprints, tasks, and bug tracking. Here’s how
                                    to get...
                                </p>
                                <div className="rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start">
                                    Health Care
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-start-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div className="rounded-xl">
                                <img
                                    src={post3}
                                    alt="tumbnail post"
                                    className="rounded-xl object-cover w-full"
                                />
                            </div>
                            <div className="flex flex-col gap-y-5">
                                <h3 className="text-thePrimary font-semibold text-md">
                                    Lana Steiner • 18 Jan 2022
                                </h3>
                                <h1 className="text-xl font-semibold">
                                    Building your API Stack
                                </h1>
                                <p className="text-gray-400">
                                    The rise of RESTful APIs has been met by a
                                    rise in tools for creating, testing, and
                                    manag...
                                </p>
                                <div className="rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start">
                                    Mental Care
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-24 my-20">
                <h1 className="text-2xl font-bold my-10">All Blog Post</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <BlogItem
                        title="Bill Walsh leadership lessons"
                        author="Alec Whitten"
                        publish="17 Jan 2022"
                        img={post1}
                    >
                        Like to know the secrets of transforming a 2-14 team
                        into a 3x Super Bowl winning Dynasty?
                    </BlogItem>
                    <BlogItem
                        title="Bill Walsh leadership lessons"
                        author="Alec Whitten"
                        publish="17 Jan 2022"
                        img={post2}
                    >
                        Like to know the secrets of transforming a 2-14 team
                        into a 3x Super Bowl winning Dynasty?
                    </BlogItem>
                    <BlogItem
                        title="Bill Walsh leadership lessons"
                        author="Alec Whitten"
                        publish="17 Jan 2022"
                        img={post3}
                    >
                        Like to know the secrets of transforming a 2-14 team
                        into a 3x Super Bowl winning Dynasty?
                    </BlogItem>
                    <BlogItem
                        title="Bill Walsh leadership lessons"
                        author="Alec Whitten"
                        publish="17 Jan 2022"
                        img={post1}
                    >
                        Like to know the secrets of transforming a 2-14 team
                        into a 3x Super Bowl winning Dynasty?
                    </BlogItem>
                    <BlogItem
                        title="Bill Walsh leadership lessons"
                        author="Alec Whitten"
                        publish="17 Jan 2022"
                        img={post3}
                    >
                        Like to know the secrets of transforming a 2-14 team
                        into a 3x Super Bowl winning Dynasty?
                    </BlogItem>
                    <BlogItem
                        title="Bill Walsh leadership lessons"
                        author="Alec Whitten"
                        publish="17 Jan 2022"
                        img={post2}
                    >
                        Like to know the secrets of transforming a 2-14 team
                        into a 3x Super Bowl winning Dynasty?
                    </BlogItem>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Blog;
