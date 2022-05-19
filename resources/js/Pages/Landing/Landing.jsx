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
import { Head } from "@inertiajs/inertia-react";
const Landing = () => {
    return (
        <>
            <Head>
                <title>Klinik Asyifa Mariuk</title>
                <meta name="description" content="A Website" />
            </Head>
            <Navbar />
            <section className="overflow-x-hidden px-24 relative" id="hero">
                <div className="grid sm:grid-cols-2 grid-cols-1 pt-[150px]">
                    <div className="container flex flex-col gap-y-3 justify-center">
                        <h1 className="sm:text-6xl font-semibold">
                            We Are Providing{" "}
                            <span className="underline underline-offset-2 text-thePrimary ">
                                Best and Affordable
                            </span>{" "}
                            Health Care.
                        </h1>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed dictum venenatis rhoncus. Aliquam dictum
                            enim quam, vitae commodo odio lobortis a.
                        </p>
                        <div className="inline-flex justify-start items-center gap-3">
                            <Button
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
                            </Button>
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
                    <div className="sm:col-span-2 bg-thePrimary px-3 py-16  rounded-md text-white w-full max-w-6xl">
                        <div className="grid grid-cols-3">
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
                                        Opening Hours
                                    </h1>
                                    <p className="font-light">
                                        Monday - Sunday
                                    </p>
                                    <p className="font-light">
                                        06:00 AM - 09:00 PM
                                    </p>
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
                                        Opening Hours
                                    </h1>
                                    <p className="font-light">
                                        Monday - Sunday
                                    </p>
                                    <p className="font-light">
                                        06:00 AM - 09:00 PM
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
                                        Opening Hours
                                    </h1>
                                    <p className="font-light">
                                        Monday - Sunday
                                    </p>
                                    <p className="font-light">
                                        06:00 AM - 09:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white absolute px-6 py-4 rounded-md flex flex-col gap-y-2 left-[1120px] top-[406px]">
                    <h2 className="font-semibold">Available doctor</h2>
                    <p className="te-gray-500">select doctor</p>
                    <a className="w-full h-full flex gap-x-2 group hover:bg-gray-100 p-2 rounded-md hover:cursor-pointer">
                        <img
                            src={smallDoctor}
                            alt="doctor"
                            className="rounded-full group-hover:bg-gray-100"
                        />
                        <div className="group-hover:bg-gray-100">
                            <h2 className="font-semibold">Dr. Diandra</h2>
                            <h2>Eye spesialist</h2>
                        </div>
                    </a>
                    <a className="w-full h-full flex gap-x-2 group hover:bg-gray-100 p-2 rounded-md hover:cursor-pointer">
                        <img
                            src={smallDoctor2}
                            alt="doctor"
                            className="rounded-full group-hover:bg-gray-100"
                        />
                        <div className="group-hover:bg-gray-100">
                            <h2 className="font-semibold">Dr. diandra</h2>
                            <h2>Ear spesialist</h2>
                        </div>
                    </a>
                    <button className="py-2 bg-error-600 rounded-md px-2 text-white mx-auto block">
                        Find a Doctor
                    </button>
                </div>
            </section>
            <section className="px-24 mt-20">
                <div className="grid sm:grid-cols-2 grid-cols-1">
                    <div className="">
                        <h1 className="sm:text-6xl font-semibold">
                            The{" "}
                            <span className="text-thePrimary">
                                Best Quality
                            </span>{" "}
                            Service for You
                        </h1>
                    </div>
                    <div className="">
                        <p className="px-10">
                            Curabitur elementum, nunc at faucibus finibus, elit
                            magna pulvinar metus, a blandit nunc arcu vel
                            ligula. Fusce in vestibulum sem.
                        </p>
                    </div>
                </div>
            </section>
            <section
                id="service"
                className="relative overflow-y-hidden px-24 mt-20"
            >
                <div className="grid sm:grid-cols-2 grid-cols-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                        <ServiceItem title="Patient Safety">
                            Donec euismod felis ut faucibus pellentesque. Nullam
                            eu ante nec diam egestas gravida et at lorem.
                        </ServiceItem>
                        <ServiceItem title="Free Consultation">
                            Donec euismod felis ut faucibus pellentesque. Nullam
                            eu ante nec diam egestas gravida et at lorem.
                        </ServiceItem>
                        <ServiceItem title="Patient Safety">
                            Donec euismod felis ut faucibus pellentesque. Nullam
                            eu ante nec diam egestas gravida et at lorem.
                        </ServiceItem>
                        <ServiceItem title="Free Consultation">
                            Donec euismod felis ut faucibus pellentesque. Nullam
                            eu ante nec diam egestas gravida et at lorem.
                        </ServiceItem>
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
            <section className="h-[456px] w-full bg-[#F9FAFB] px-24 flex flex-col justify-center items-center gap-y-5">
                <h1 className="font-semibold text-5xl text-center">
                    Nullam eu ante nec diam egestas gravida et at lorem.
                    Maecenas in suscipit elit, sed ac erat posuere.
                </h1>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <img src={people} alt="people" className="rounded-full" />
                    <h1 className="font-semibold">Candice Wu</h1>
                    <p className="font-light">Product Manager, Sisyphus</p>
                </div>
            </section>
            <section className="px-24 mt-20">
                <div className="grid sm:grid-cols-3 grid-cols-1">
                    <div className="col-span-2">
                        <h1 className="sm:text-6xl font-semibold">
                            <span className="text-thePrimary">
                                {" "}
                                We're Providing{" "}
                            </span>
                            Multiple Medical Specialities
                        </h1>
                    </div>
                    <div className="">
                        <p className="px-10">
                            Curabitur elementum, nunc at faucibus finibus, elit
                            magna pulvinar metus, a blandit nunc arcu vel
                            ligula. Fusce in vestibulum sem.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                    <ServiceItem title="Free Consultation">
                        Aenean quis malesuada orci. Praesent nisl dui,
                        sollicitudin et auctor a, lacinia at libero. Nunc mollis
                        velit metus, ut mollis mauris luctus at. Vivamus sed
                        dictum ipsum. Curabitur malesuada viverra felis,
                        convallis ullamcorper nunc auctor tristique.
                    </ServiceItem>
                    <ServiceItem title="Free Consultation">
                        Aenean quis malesuada orci. Praesent nisl dui,
                        sollicitudin et auctor a, lacinia at libero. Nunc mollis
                        velit metus, ut mollis mauris luctus at. Vivamus sed
                        dictum ipsum. Curabitur malesuada viverra felis,
                        convallis ullamcorper nunc auctor tristique.
                    </ServiceItem>
                    <ServiceItem title="Free Consultation">
                        Aenean quis malesuada orci. Praesent nisl dui,
                        sollicitudin et auctor a, lacinia at libero. Nunc mollis
                        velit metus, ut mollis mauris luctus at. Vivamus sed
                        dictum ipsum. Curabitur malesuada viverra felis,
                        convallis ullamcorper nunc auctor tristique.
                    </ServiceItem>
                    <ServiceItem title="Free Consultation">
                        Aenean quis malesuada orci. Praesent nisl dui,
                        sollicitudin et auctor a, lacinia at libero. Nunc mollis
                        velit metus, ut mollis mauris luctus at. Vivamus sed
                        dictum ipsum. Curabitur malesuada viverra felis,
                        convallis ullamcorper nunc auctor tristique.
                    </ServiceItem>
                    <ServiceItem title="Free Consultation">
                        Aenean quis malesuada orci. Praesent nisl dui,
                        sollicitudin et auctor a, lacinia at libero. Nunc mollis
                        velit metus, ut mollis mauris luctus at. Vivamus sed
                        dictum ipsum. Curabitur malesuada viverra felis,
                        convallis ullamcorper nunc auctor tristique.
                    </ServiceItem>
                    <ServiceItem title="Free Consultation">
                        Aenean quis malesuada orci. Praesent nisl dui,
                        sollicitudin et auctor a, lacinia at libero. Nunc mollis
                        velit metus, ut mollis mauris luctus at. Vivamus sed
                        dictum ipsum. Curabitur malesuada viverra felis,
                        convallis ullamcorper nunc auctor tristique.
                    </ServiceItem>
                </div>
            </section>
            <section className="px-24 mt-20">
                <div className="flex flex-col justify-center items-center gap-6">
                    <h1 className="text-6xl font-semibold">
                        Meet Our <span className="text-thePrimary">Expert</span>{" "}
                        Specialists
                    </h1>
                    <p className="text-gray-400 px-10 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed a quam vel justo semper luctus tempus sit amet
                        mauris. Morbi orci ligula, fermentum nec diam pharetra,
                        lobortis vestibulum lorem.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20">
                        <div className="flex flex-col bg-[#F9FAFB] rounded-2xl w-[384px] h-[480px] justify-end items-center">
                            <img
                                src={diandra}
                                alt="doctor"
                                className="object-fit w-2/3 h-auto"
                            />
                            <div className="flex flex-col text-white rounded-2xl bg-thePrimary gap-2 p-4 w-full">
                                <h1 className="font-semibold">
                                    Diandra Wulandari
                                </h1>
                                <p className="font-light">Dermatologists</p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-[#F9FAFB] rounded-2xl w-[384px] h-[480px] justify-end items-center">
                            <img
                                src={kanda}
                                alt="doctor"
                                className="object-fit w-2/3 h-auto"
                            />
                            <div className="flex flex-col text-white rounded-2xl bg-thePrimary gap-2 p-4 w-full">
                                <h1 className="font-semibold">
                                    Kanda Wulandari
                                </h1>
                                <p className="font-light">Dermatologists</p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-[#F9FAFB] rounded-2xl w-[384px] h-[480px] justify-end items-center">
                            <img
                                src={bagus}
                                alt="doctor"
                                className="object-fit w-2/3 h-auto"
                            />
                            <div className="flex flex-col text-white rounded-2xl bg-thePrimary gap-2 p-4 w-full">
                                <h1 className="font-semibold">
                                    Bagus Wulandari
                                </h1>
                                <p className="font-light">Dermatologists</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-24 bg-[#F9FAFB] mt-20 pb-12">
                <div className="flex flex-col justify-center items-center gap-6 pt-20">
                    <h1 className="text-6xl font-semibold">
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
                    <RatingItem name="Rezky Finaldi Widihastuti" stars={5}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Iste, quidem! Laudantium voluptatibus consequatur
                        nam sint.
                    </RatingItem>
                    <RatingItem name="Mirza Fariz Widiyasari" stars={5}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed a quam vel justo semper luctus tempus sit amet
                        mauris. Morbi orci ligula, fermentum nec diam pharetra,
                        lobortis vestibulum lorem. Nulla in feugiat dolor.
                        Integer sit amet massa at ligula tristique dapibus.
                    </RatingItem>
                    <RatingItem name="Rifat Mariana" stars={5}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Iste, quidem! Laudantium voluptatibus consequatur
                        nam sint.
                    </RatingItem>
                    <RatingItem name="Permana Zahra" stars={5}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed a quam vel justo semper luctus tempus sit amet
                        mauris. Morbi orci ligula, fermentum nec diam pharetra,
                        lobortis vestibulum lorem. Nulla in feugiat dolor.
                        Integer sit amet massa at ligula tristique dapibus.
                    </RatingItem>
                    <RatingItem name="Fahdnul Nugraha" stars={4}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Iste, quidem! Laudantium voluptatibus consequatur
                        nam sint.
                    </RatingItem>
                    <RatingItem name="Humam Wardhani" stars={5}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Iste, quidem! Laudantium voluptatibus consequatur
                        nam sint.
                    </RatingItem>
                </div>
            </section>
            <section className="px-24 mt-20 pb-20">
                <div className="flex flex-col justify-center items-center gap-6">
                    <h1 className="text-6xl font-semibold">
                        Read Our <span className="text-thePrimary">Latest</span>{" "}
                        News!
                    </h1>
                    <p className="text-gray-400 px-10 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed a quam vel justo semper luctus tempus sit amet
                        mauris. Morbi orci ligula, fermentum nec diam pharetra,
                        lobortis vestibulum lorem.
                    </p>
                    <div className="p-3 flex justify-center items-center hover:cursor-pointer">
                        <div className="bg-[#FEF3F2] rounded-full px-3 py-1 text-thePrimary font-semibold">
                            <span className="bg-white rounded-full px-3 py-0.5 mr-2">
                                New articles
                            </span>
                            Check out our latest update
                        </div>
                    </div>
                </div>
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
            <Footer />
        </>
    );
};

export default Landing;
