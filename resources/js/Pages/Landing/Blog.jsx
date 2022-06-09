import React from "react";
import Navbar from "../../Components/MainNavbar";
import Footer from "../../Components/Footer";
import post1 from "@/src/post1.png";
import post2 from "@/src/post2.png";
import post3 from "@/src/post3.png";
import BlogItem from "../../Components/BlogItem";
import { Head, InertiaLink } from "@inertiajs/inertia-react";

const Blog = ({ posts, lattestPost, twoLatestPost }) => {
    lattestPost = lattestPost[0];
    return (
        <>
            <Head>
                <title>Klinik Asyifa Mariuk</title>
            </Head>
            <Navbar justSticky={true} />
            <section className="md:px-24 px-4 my-20">
                <div className="container flex flex-col gap-y-5 items-center">
                    <span className="block text-sm font-semibold text-gray-400">
                        Blog Kami
                    </span>
                    <h1 className="md:text-6xl text-2xl sm:text-3xl font-bold self-start md:self-auto">
                        Artikel dan berita
                    </h1>
                    <p className="text-gray-400 text-sm max-w-[768px]">
                        Berlangganan untuk mendapatkan berita terkini seputar
                        kesehatan
                    </p>
                    <div className="flex gap-x-2 self-center justify-self-center">
                        <input
                            type="email"
                            className="rounded-lg border-gray-300 border-2 md:w-[360px] w-full block focus:border-thePrimary transition-all duration-100 ease-in"
                            placeholder="Masukan Email"
                        />
                        <button className="block w-full text-center text-white bg-error-600 py-2 rounded-lg">
                            Langganan
                        </button>
                    </div>
                    <p className="text-gray-400">
                        We care about your data in our privacy policy
                    </p>
                </div>
            </section>
            <section className="md:px-24 px-4">
                <h1 className="text-2xl font-bold">Postingan blog terkini</h1>
                <div className="grid overflow-hidden sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 grid-rows-1 gap-2 mt-10">
                    <div className="sm:row-span-2">
                        <div className="flex flex-col gap-y-5 justify-items-stretch">
                            <div className="rounded-xl">
                                <img
                                    src={lattestPost.thumbnail}
                                    alt="tumbnail post"
                                    className="rounded-xl object-cover w-full"
                                />
                            </div>
                            <h3 className="text-thePrimary font-semibold text-md">
                                {lattestPost.user.name} •{" "}
                                {lattestPost.published_at}
                            </h3>
                            <InertiaLink href={lattestPost.see_detail}>
                                <h1 className="text-xl font-semibold hover:underline">
                                    {lattestPost.title}
                                </h1>
                            </InertiaLink>
                            <p className="text-gray-400">
                                {lattestPost.mini_body} ...
                            </p>
                            <div className="flex flex-wrap justify-start items-start space-x-3">
                                {lattestPost.tags.map((tag) => (
                                    <div className="rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start">
                                        {tag.tag.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {twoLatestPost.map((post, index) => {
                        console.log(index);
                        if (index != 0) {
                            return (
                                <div className="sm:col-start-2">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        <div className="rounded-xl">
                                            <img
                                                src={post.thumbnail}
                                                alt="tumbnail post"
                                                className="rounded-xl object-cover w-full"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-y-5">
                                            <h3 className="text-thePrimary font-semibold text-md">
                                                {post.user.name} •{" "}
                                                {post.published_at}
                                            </h3>
                                            <InertiaLink href={post.see_detail}>
                                                <h1 className="text-xl font-semibold hover:underline">
                                                    {post.title}
                                                </h1>
                                            </InertiaLink>
                                            <p className="text-gray-400">
                                                {post.mini_body} ...
                                            </p>
                                            <div className="flex flex-wrap justify-start items-start space-x-3">
                                                {post.tags.map((tag) => (
                                                    <div className="rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start">
                                                        {tag.tag.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </section>
            <section className="md:px-24 px-4 my-20">
                <h1 className="text-2xl font-bold my-10">Semua Postingan</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <BlogItem
                            title={post.title}
                            author={post.user.name}
                            publish={post.published_at}
                            img={post.thumbnail}
                            seeDetail={post.see_detail}
                            tags={post.tags}
                        >
                            {post.mini_body}
                        </BlogItem>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Blog;
