import React from "react";
import doctor from "@/src/female-doctor.png";
import smallDoctor from "@/src/dr-small.png";
import smallDoctor2 from "@/src/dr-small-2.png";
import doctorService from "@/src/dr-serv.png";
import people from "@/src/people.png";
import kanda from "@/src/kanda.png";
import bagus from "@/src/bagus.png";
import post1 from "@/src/post1.png";
import post2 from "@/src/post2.png";
import post3 from "@/src/post3.png";
import diandra from "@/src/diandra.png";
import Button from "@/Components/Button";
import ServiceItem from "../../Components/ServiceItem";
import RatingItem from "../../Components/RatingItem";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/MainNavbar";
// import { IoLocationOutline } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { BiTime, BiPhone } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { Head, InertiaLink } from "@inertiajs/inertia-react";

const Landing = ({
    lattestPost,
    twoLatestPost,
    reviews,
    servicesLab,
    servicesKlinik,
    doctors,
}) => {
    lattestPost = lattestPost[0];
    console.log(lattestPost);
    return (
        <>
            <Head>
                <title>Klinik Asyifa Mariuk</title>
                <meta name="description" content="A Website" />
            </Head>
            <Navbar />
            <section
                className="overflow-x-hidden md:px-24 px-2 relative max-w-max mx-auto container"
                id="hero"
            >
                <div className="grid  sm:grid-cols-2 grid-cols-1 pt-[150px] gap-3">
                    <div className="container flex flex-col gap-y-3 justify-center">
                        <h1 className="sm:text-6xl text-2xl md:text-3xl font-semibold">
                            Klinik Asyifaa' Mariuk Membangun{" "}
                            <span className="underline underline-offset-2 text-thePrimary ">
                                Keluaga Sehat
                            </span>{" "}
                            dah Sejahtera
                        </h1>
                        <p className="text-gray-400">
                            Memberikan pelayanan kesehatan bagi seluruh lapisan
                            masyarakat demi terwujudnya hidup sehat
                        </p>
                        <div className="inline-flex justify-start items-center gap-3">
                            {/* <Button
                                variant="primary"
                                type="submit"
                                icon={<BiTime />}
                                iconPosition="left"
                            >
                                Primary Button
                            </Button>
                            <Button
                                variant="secondary"
                                type="submit"
                                moreClassName="ml-2"
                            >
                                Secondary
                            </Button> */}
                        </div>
                    </div>
                    <div className="container">
                        <span className="absolute top-0 -z-10">
                            <svg
                                width="757"
                                height="780"
                                viewBox="0 0 757 780"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="538"
                                    cy="242"
                                    r="538"
                                    fill="#FEE4E2"
                                />
                            </svg>
                        </span>

                        <img src={doctor} alt="dokter" />
                    </div>
                    <div className="sm:col-span-2 bg-thePrimary px-3 py-16  rounded-md text-white w-full max-w-6xl mx-auto">
                        <div className="grid sm:grid-cols-3 grid-cols-1 gap-3">
                            <div className="flex justify-center gap-2">
                                <span className="justify-self-end">
                                    <BiTime
                                        size={32}
                                        style={{
                                            width: "inherit",
                                            height: "inherit",
                                            verticalAlign: "middle",
                                        }}
                                    />
                                </span>
                                <div className="">
                                    <h1 className="text-xl font-semibold">
                                        Jam Praktek
                                    </h1>
                                    <p className="font-light">Senin - Minggu</p>
                                    <p className="font-light">06:00 - 21:00</p>
                                </div>
                            </div>
                            <div className="flex justify-center gap-2">
                                <span className="justify-self-end">
                                    <BiPhone
                                        size={32}
                                        style={{
                                            width: "inherit",
                                            height: "inherit",
                                            verticalAlign: "middle",
                                        }}
                                    />
                                </span>
                                <div className="">
                                    <h1 className="text-xl font-semibold">
                                        Kontak
                                    </h1>
                                    <p className="font-light">
                                        klinikasyifamariuk@medical.com
                                    </p>
                                    <p className="font-light">
                                        +62 821-1188-8903
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center gap-2">
                                <span className="justify-self-end">
                                    <GoLocation
                                        className="text-white"
                                        size={32}
                                        style={{
                                            width: "inherit",
                                            height: "inherit",
                                            verticalAlign: "middle",
                                            fill: "#fff",
                                            color: "#fff",
                                        }}
                                    />
                                </span>
                                <div className="">
                                    <h1 className="text-xl font-semibold">
                                        Lokasi
                                    </h1>
                                    <p className="font-light">
                                        Jl. Karanganyar No.48, Margaluyu,
                                        Tanjungsari, Kab. Sumedang, Jawa Barat
                                        POS 45362
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white lg:absolute mt-4 lg:mt-0 static px-6 py-4 rounded-md flex flex-col items-center border border-red-600 gap-y-2 lg:left-[1120px] lg:top-[406px]">
                    <h2 className="font-semibold">Available doctor</h2>
                    <p className="te-gray-500">select doctor</p>
                    <a className="lg:w-full lg:h-full w-auto h-auto flex gap-x-2 group hover:bg-gray-100 p-2 rounded-md hover:cursor-pointer">
                        <img
                            src={smallDoctor}
                            alt="doctor"
                            className="rounded-full group-hover:bg-gray-100"
                        />
                        <div className="group-hover:bg-gray-100">
                            <h2 className="font-semibold">Dr. Intan</h2>
                            <h2>Dokter Umum</h2>
                        </div>
                    </a>
                    <a className="lg:w-full lg:h-full w-auto h-auto flex gap-x-2 group hover:bg-gray-100 p-2 rounded-md hover:cursor-pointer">
                        <img
                            src={smallDoctor2}
                            alt="doctor"
                            className="rounded-full group-hover:bg-gray-100"
                        />
                        <div className="group-hover:bg-gray-100">
                            <h2 className="font-semibold">Dr. Geri</h2>
                            <h2>Dokter Umum</h2>
                        </div>
                    </a>
                    <button className="py-2 bg-error-600 rounded-md px-2 text-white mx-auto block">
                        Cari Doctor
                    </button>
                </div>
            </section>
            <section className="md:px-24 px-4 mt-20">
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                    <div className="">
                        <h1 className="sm:text-6xl font-semibold text-2xl">
                            Memberikan Pelayanan Kesehatan{" "}
                            <span className="text-thePrimary">Terbaik</span>
                        </h1>
                    </div>
                    <div className="">
                        <p className="lg:px-10">
                            Memberikan pelayanan kesehatan bagi seluruh lapisan
                            masyarakat demi terwujudnya hidup sehat serta
                            membina masyarakat dalam usahanya mencapai kesehatan
                            secara mandiri.
                        </p>
                    </div>
                </div>
            </section>
            <section
                id="service"
                className="relative overflow-y-hidden md:px-24 px-2 mt-20"
            >
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                        {servicesKlinik.map((service, index) => (
                            <ServiceItem title={service.title}>
                                {service.description}
                            </ServiceItem>
                        ))}
                    </div>
                    <div className="">
                        <span className="absolute -z-10 -bottom-96 right-0">
                            <svg
                                width="720"
                                height="920"
                                viewBox="0 0 720 920"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="460"
                                    cy="460"
                                    r="460"
                                    fill="#FEE4E2"
                                />
                            </svg>
                        </span>
                        <img src={doctorService} alt="doctor" />
                    </div>
                    {/* <div className="sm:col-span-2 h-10 w-full bg-white"></div> */}
                </div>
            </section>
            <section className="h-[456px] w-full bg-[#F9FAFB] px-4 mt-20 flex flex-col justify-center items-center gap-y-5">
                <h1 className="font-semibold md:text-5xl sm:text-3xl text-2xl text-center">
                    “Hal yang paling menyenangkan di tengah masa sulit adalah
                    kesehatan yang baik dan tidur yang cukup.”
                </h1>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <img src={people} alt="people" className="rounded-full" />
                    <h1 className="font-semibold">Candice Wu</h1>
                    <p className="font-light">Product Manager, Sisyphus</p>
                </div>
            </section>
            <section className="md:px-24 px-4 mt-20">
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-3">
                    <div className="col-span-2">
                        <h1 className="sm:text-6xl text-2xl font-semibold">
                            <span className="text-thePrimary">
                                Kami Memiliki
                            </span>
                            Berbagai Macam Fasilitas
                        </h1>
                    </div>
                    <div className="">
                        <p className="md:px-10 px-2">
                            Fasilitas-fasilitas ini tentunya didukung oleh
                            berbagai macam peralatan mumpuni
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                    {servicesLab.map((service, index) => (
                        <ServiceItem title={service.title}>
                            {service.description}
                        </ServiceItem>
                    ))}
                </div>
            </section>
            <section className="md:px-24 px-4 mt-16">
                <div className="flex flex-col justify-center items-center gap-6">
                    <h1 className="sm:text-6xl md:text-4xl text-2xl font-semibold">
                        Temui Dekter-Dokter
                        <span className="text-thePrimary"> Terbaik</span> Kami
                    </h1>
                    <p className="text-gray-400 md:px-10 px-2 text-left sm:text-center">
                        Dokter-dokter yang bekerja di Klinik Asyifaa Mariuk
                        tentunya merupakan orang-orang yang ahli di bidangnya
                        dan memiliki spesialisasi terkait. Kami akan mengabdi
                        dan melayani dengan sepenuh hati
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
                        {doctors.map((item, index) => (
                            <div className="flex flex-col  rounded-2xl w-full justify-end items-center">
                                <img
                                    src={item.path_image}
                                    alt="doctor"
                                    className="object-fit h-auto"
                                />
                                <div className="flex flex-col text-white rounded-2xl bg-thePrimary gap-2 p-4 w-full">
                                    <h1 className="font-semibold">
                                        {item.name}
                                    </h1>
                                    <p className="font-light">
                                        {item.specialist}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="md:px-24 px-4 bg-[#F9FAFB] mt-20 pb-12">
                <div className="flex flex-col justify-center items-center gap-6 pt-20">
                    <h1 className="md:text-6xl sm:text-3xl text-2xl font-semibold">
                        Let's See What{" "}
                        <span className="text-thePrimary">Patient</span> Says!
                    </h1>
                    <p className="text-gray-400 px-10 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed a quam vel justo semper luctus tempus sit amet
                        mauris. Morbi orci ligula, fermentum nec diam pharetra,
                        lobortis vestibulum lorem.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-16">
                    {reviews.map((review, index) => (
                        <RatingItem name={review.name} stars={review.stars}>
                            {review.comment}
                        </RatingItem>
                    ))}
                </div>
            </section>
            <section className="md:px-24 px-4 mt-20 pb-20">
                <div className="flex flex-col justify-center items-center gap-6">
                    <h1 className="md:text-6xl sm:text-3xl text-2xl font-semibold">
                        Baca Berita Artikel
                        <span className="text-thePrimary"> Terkini</span>
                    </h1>
                    <p className="text-gray-400 px-10 text-center">
                        Artikel-artikel yang dikemas untuk memberi pengetahuan
                        kepada anda
                    </p>
                    <InertiaLink href={route("articles")}>
                        <div className="p-3 flex justify-center items-center hover:cursor-pointer">
                            <div className="bg-[#FEF3F2] rounded-full px-4 py-1 text-thePrimary font-semibold flex flex-col sm:block">
                                <span className="bg-white rounded-full px-3 py-0.5 mr-2 justify-self-center items-center text-center sm:text-left animate-pulse">
                                    New articles
                                </span>
                                <span>Check out our latest update</span>
                            </div>
                        </div>
                    </InertiaLink>
                </div>
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
            <Footer />
        </>
    );
};

export default Landing;
