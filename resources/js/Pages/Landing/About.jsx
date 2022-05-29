import React from "react";
import Navbar from "../../Components/MainNavbar";
import Footer from "../../Components/Footer";
import ServiceItem from "../../Components/ServiceItem";
import people from "@/src/people.png";
import img1 from "@/src/about/1.png";
import img2 from "@/src/about/2.png";
import img3 from "@/src/about/3.png";
import img4 from "@/src/about/4.png";
import img5 from "@/src/about/5.png";
import img6 from "@/src/about/6.png";
import img7 from "@/src/about/7.png";
import img8 from "@/src/about/8.png";
import img9 from "@/src/about/9.png";
import img10 from "@/src/about/10.png";
import { Head } from "@inertiajs/inertia-react";

const About = () => {
    return (
        <>
            <Head>
                <title>Klinik Asyifa Mariuk</title>
            </Head>
            <Navbar justSticky={true} />
            <section className="md:px-24 px-2">
                <div className="flex flex-col gap-y-10 justify-center items-center">
                    <h1 className="sm:text-6xl text-2xl md:text-3xl text-center font-bold">
                        Klinik Asyifaa Mariuk Providing{" "}
                        <span className="text-thePrimary underline underline-offset-2">
                            Best and Affordable
                        </span>{" "}
                        Health Care.
                    </h1>
                    <p className="text-gray-400 text-center w-auto lg:w-[800px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed dictum venenatis rhoncus. Aliquam dictum enim quam,
                        vitae commodo odio lobortis a.
                    </p>
                </div>
            </section>
            <section className="md:px-10 px-2 mt-16">
                <div className="flex flex-row md:justify-between justify-evenly max-w-6xl m-auto space-x-2 md:gap-2">
                    <div className="flex flex-col justify-center items-center order-1">
                        <img src={img1} alt="" className="rounded-lg " />
                    </div>
                    <div className="hidden md:flex md:flex-col space-y-2 order-3 md:order-2 flex-wrap md:flex-nowrap">
                        <div className="flex flex-row space-x-2 justify-end items-end">
                            <img
                                src={img2}
                                alt=""
                                className="rounded-lg order-1"
                            />
                            <img
                                src={img3}
                                alt=""
                                className="rounded-lg order-2"
                            />
                        </div>
                        <div className="flex md:flex-row space-x-2 justify-start items-start">
                            <img
                                src={img5}
                                alt=""
                                className="rounded-lg order-2 md:order-1"
                            />
                            <img
                                src={img6}
                                alt=""
                                className="rounded-lg order-1 md:order-2"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center order-2 md:order-3">
                        <img src={img4} alt="" className="rounded-lg " />
                    </div>
                </div>
            </section>
            <section className="md:px-24 px-2 mt-20">
                <p className="text-gray-400 max-w-[1008px] mx-auto">
                    Creeping his without wherein fill lesser of you set sea
                    very. Let saying fly green were without his waters midst
                    waters over one man the won't one were years earth let.
                    Don't fruit him won't winged two let seas blessed a man
                    multiply second waters beast his fruitful likeness and to
                    earth hath make one there him wherein which image. Called
                    living female of.
                </p>
                <p className="text-gray-400 max-w-[1008px] mx-auto mt-20">
                    Creeping his without wherein fill lesser of you set sea
                    very. Let saying fly green were without his waters midst
                    waters over one man the won't one were years earth let.
                    Don't fruit him won't winged two let seas blessed a man
                    multiply second waters beast his fruitful likeness and to
                    earth hath make one there him wherein which image. Called
                    living female of.
                </p>
            </section>
            <section className="md:px-24 px-2 mt-20 bg-gray-50">
                <div className="flex flex-wrap py-10">
                    <div className="md:w-1/2 w-full flex flex-col gap-y-6 order-2 md:order-1">
                        <h1 className="sm:text-6xl text-2xl md:text-3xl font-bold mt-4 md:mt-0">
                            <span className="text-thePrimary">
                                Best and Affordable
                            </span>{" "}
                            Health Care.
                        </h1>
                        <p className="text-gray-400">
                            Creeping his without wherein fill lesser of you set
                            sea very. Let saying fly green were without his
                            waters midst waters over one man the won't one were
                            years earth let.
                        </p>
                        <p className="text-gray-400">
                            Don't fruit him won't winged two let seas blessed a
                            man multiply second waters beast his fruitful
                            likeness and to earth hath make one there him
                            wherein which image.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full flex justify-center items-center order-1 md:order-2">
                        <div className="flex flex-row justify-between max-w-md gap-2">
                            <div className="flex flex-col justify-start items-start gap-2">
                                <img src={img7} alt="" className="rounded-lg" />
                                <img src={img9} alt="" className="rounded-lg" />
                            </div>
                            <div className="flex flex-col justify-start items-start gap-2">
                                <img src={img8} alt="" className="rounded-lg" />
                                <img
                                    src={img10}
                                    alt=""
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                        {/* <div className="grid overflow-hidden grid-lines grid-cols-2 grid-rows-2 gap-2">
                            <div className="bg-sky-500">
                                <img src={img7} alt="" className="rounded-lg" />
                            </div>
                            <div className="bg-sky-500 row-span-2 place-self-center">
                                <img src={img8} alt="" className="rounded-lg" />
                            </div>
                            <div className="bg-sky-500 row-span-2">
                                <img src={img9} alt="" className="rounded-lg" />
                            </div>
                            <div className="bg-sky-500">
                                <img
                                    src={img10}
                                    alt=""
                                    className="rounded-lg place-self-start"
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="md:px-24 px-4 mt-20">
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-3">
                    <div className="col-span-2">
                        <h1 className="sm:text-6xl text-2xl font-semibold">
                            <span className="text-thePrimary">
                                {" "}
                                We're Providing{" "}
                            </span>
                            Multiple Medical Specialities
                        </h1>
                    </div>
                    <div className="">
                        <p className="md:px-10 px-2">
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
            <section className="h-[456px] w-full bg-[#F9FAFB] px-4 mt-20 flex flex-col justify-center items-center gap-y-5">
                <h1 className="font-semibold md:text-5xl sm:text-3xl text-2xl text-center">
                    Nullam eu ante nec diam egestas gravida et at lorem.
                    Maecenas in suscipit elit, sed ac erat posuere.
                </h1>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <img src={people} alt="people" className="rounded-full" />
                    <h1 className="font-semibold">Candice Wu</h1>
                    <p className="font-light">Product Manager, Sisyphus</p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;
