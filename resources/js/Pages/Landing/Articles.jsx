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

const Articles = () => {
    return (
        <>
            <Head>
                <title>Klinik Asyifa Mariuk</title>
            </Head>
            <Navbar justSticky={true} />
            <section className="md:px-24 px-4 md:mt-20 mt-5">
                <div className="flex flex-col gap-y-6">
                    <div className="bg-gray-50 rounded-full px-3 py-1 text-gray-500 font-semibold justify-self-start self-start text-xs">
                        <span className="bg-white rounded-full px-3 py-0.5 mr-2">
                            Product
                        </span>
                        8 min read
                    </div>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
                        Bill Walsh leadership lessons
                    </h1>
                    <p className="text-gray-400 text-md md:w-2/3 w-full">
                        Like to know the secrets of transforming a 2-14 team
                        into a 3x Super Bowl winning Dynasty? Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </section>
            <section className="md:px-24 px-4 mt-10">
                <div className="flex flex-col gap-y-6">
                    <img
                        src={ImagePost}
                        alt="post tumbnail"
                        className="w-full h-auto rounded-xl"
                    />
                    <div className="flex justify-between items-center flex-col md:flex-row gap-3">
                        <div className="flex gap-x-3 font-semibold">
                            <div className="flex flex-col gap-y-3">
                                <h1 className="text-sm text-gray-400">
                                    Written By
                                </h1>
                                <h1 className="text-thePrimary">
                                    Alec Whitten
                                </h1>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <h1 className="text-sm text-gray-400">
                                    Published On
                                </h1>
                                <h1 className="text-thePrimary">17 jan 2022</h1>
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
                        <p className="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec ullamcorper mattis lorem non. Ultrices
                            praesent amet ipsum justo massa. Eu dolor aliquet
                            risus gravida nunc at feugiat consequat purus. Non
                            massa enim vitae duis mattis. Vel in ultricies vel
                            fringilla.
                        </p>
                        <h1 className="text-gray-700 text-2xl font-bold">
                            Introduction
                        </h1>
                        <p>
                            Mi tincidunt elit, id quisque ligula ac diam, amet.
                            Vel etiam suspendisse morbi eleifend faucibus eget
                            vestibulum felis. Dictum quis montes, sit sit.
                            Tellus aliquam enim urna, etiam. Mauris posuere
                            vulputate arcu amet, vitae nisi, tellus tincidunt.
                            At feugiat sapien varius id.
                        </p>
                        <p>
                            Eget quis mi enim, leo lacinia pharetra, semper.
                            Eget in volutpat mollis at volutpat lectus velit,
                            sed auctor. Porttitor fames arcu quis fusce augue
                            enim. Quis at habitant diam at. Suscipit tristique
                            risus, at donec. In turpis vel et quam imperdiet.
                            Ipsum molestie aliquet sodales id est ac volutpat.
                        </p>
                        <img
                            src={ImagePost2}
                            alt="post image"
                            className="h-auto w-full rounded-xl"
                        />
                        <span className="text-sm">
                            Image courtesy of Laura Davidson via Unsplash
                        </span>
                        <div className="border-l-2 pl-2 border-gray-700">
                            <p className="text-xl italic  text-gray-700 font-semibold leading-loose">
                                “In a world older and more complete than ours
                                they move finished and complete, gifted with
                                extensions of the senses we have lost or never
                                attained, living by voices we shall never hear.”
                            </p>
                            <span className="block">
                                {" "}
                                <span className="w-2 h-1 "></span>— Olivia Rhye,
                                Product Designer{" "}
                            </span>
                        </div>
                        <p>
                            Dolor enim eu tortor urna sed duis nulla. Aliquam
                            vestibulum, nulla odio nisl vitae. In aliquet
                            pellentesque aenean hac vestibulum turpis mi
                            bibendum diam. Tempor integer aliquam in vitae
                            malesuada fringilla.
                        </p>
                        <p>
                            Elit nisi in eleifend sed nisi. Pulvinar at orci,
                            proin imperdiet commodo consectetur convallis risus.
                            Sed condimentum enim dignissim adipiscing faucibus
                            consequat, urna. Viverra purus et erat auctor
                            aliquam. Risus, volutpat vulputate posuere purus sit
                            congue convallis aliquet. Arcu id augue ut feugiat
                            donec porttitor neque. Mauris, neque ultricies eu
                            vestibulum, bibendum quam lorem id. Dolor lacus,
                            eget nunc lectus in tellus, pharetra, porttitor.
                        </p>
                        <p>
                            Ipsum sit mattis nulla quam nulla. Gravida id
                            gravida ac enim mauris id. Non pellentesque congue
                            eget consectetur turpis. Sapien, dictum molestie sem
                            tempor. Diam elit, orci, tincidunt aenean tempus.
                            Quis velit eget ut tortor tellus. Sed vel, congue
                            felis elit erat nam nibh orci.
                        </p>
                        <h1 className="text-gray-700 text-2xl font-bold">
                            Software and tools
                        </h1>
                        <p>
                            Pharetra morbi libero id aliquam elit massa integer
                            tellus. Quis felis aliquam ullamcorper porttitor.
                            Pulvinar ullamcorper sit dictumst ut eget a,
                            elementum eu. Maecenas est morbi mattis id in ac
                            pellentesque ac.
                        </p>
                        <h1 className="text-gray-700 text-2xl font-bold">
                            Other resources
                        </h1>
                        <p>
                            Sagittis et eu at elementum, quis in. Proin praesent
                            volutpat egestas sociis sit lorem nunc nunc sit.
                            Eget diam curabitur mi ac. Auctor rutrum lacus
                            malesuada massa ornare et. Vulputate consectetur ac
                            ultrices at diam dui eget fringilla tincidunt. Arcu
                            sit dignissim massa erat cursus vulputate gravida
                            id. Sed quis auctor vulputate hac elementum gravida
                            cursus dis.
                        </p>
                        <ol className="list-decimal list-inside">
                            <li>
                                Lectus id duis vitae porttitor enim gravida
                                morbi.
                            </li>
                            <li>
                                Eu turpis posuere semper feugiat volutpat elit,
                                ultrices suspendisse. Auctor vel in vitae
                                placerat.
                            </li>
                            <li>
                                Suspendisse maecenas ac donec scelerisque diam
                                sed est duis purus.
                            </li>
                        </ol>
                        <img
                            src={ImagePost3}
                            alt="post image"
                            className="h-auto w-full rounded-xl"
                        />
                        <span className="text-sm">
                            Image courtesy of Laura Davidson via Unsplash
                        </span>
                        <p>
                            Lectus leo massa amet posuere. Malesuada mattis non
                            convallis quisque. Libero sit et imperdiet bibendum
                            quisque dictum vestibulum in non. Pretium ultricies
                            tempor non est diam. Enim ut enim amet amet integer
                            cursus. Sit ac commodo pretium sed etiam turpis
                            suspendisse at.
                        </p>
                        <p>
                            Tristique odio senectus nam posuere ornare leo
                            metus, ultricies. Blandit duis ultricies vulputate
                            morbi feugiat cras placerat elit. Aliquam tellus
                            lorem sed ac. Montes, sed mattis pellentesque
                            suscipit accumsan. Cursus viverra aenean magna risus
                            elementum faucibus molestie pellentesque. Arcu
                            ultricies sed mauris vestibulum.
                        </p>
                        <h1 className="text-gray-700 text-2xl font-bold">
                            Conclusion
                        </h1>
                        <p>
                            Morbi sed imperdiet in ipsum, adipiscing elit dui
                            lectus. Tellus id scelerisque est ultricies
                            ultricies. Duis est sit sed leo nisl, blandit elit
                            sagittis. Quisque tristique consequat quam sed. Nisl
                            at scelerisque amet nulla purus habitasse.
                        </p>
                        <p>
                            Nunc sed faucibus bibendum feugiat sed interdum.
                            Ipsum egestas condimentum mi massa. In tincidunt
                            pharetra consectetur sed duis facilisis metus. Etiam
                            egestas in nec sed et. Quis lobortis at sit dictum
                            eget nibh tortor commodo cursus.
                        </p>
                        <p>
                            Odio felis sagittis, morbi feugiat tortor vitae
                            feugiat fusce aliquet. Nam elementum urna nisi
                            aliquet erat dolor enim. Ornare id morbi eget ipsum.
                            Aliquam senectus neque ut id eget consectetur
                            dictum. Donec posuere pharetra odio consequat
                            scelerisque et, nunc tortor.
                        </p>
                        <p>
                            Nulla adipiscing erat a erat. Condimentum lorem
                            posuere gravida enim posuere cursus diam.
                        </p>
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
                                Weekly newsletter
                            </h1>
                            <p className="text-gray-400">
                                No spam. Just the latest releases and tips,
                                interesting articles, and exclusive interviews
                                in your inbox every week.
                            </p>
                            <input
                                type="email"
                                className="rounded-lg border-gray-300 border-2 w-full block focus:border-thePrimary transition-all duration-100 ease-in"
                                placeholder="Enter Your Email"
                            />
                            <p className="text-sm text-gray-400">
                                Read about our{" "}
                                <span className="underline underline-offset-1">
                                    privacy policy
                                </span>
                            </p>
                            <button className="block w-full text-center text-white bg-error-600 py-2 rounded-lg">
                                Subscribe
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
