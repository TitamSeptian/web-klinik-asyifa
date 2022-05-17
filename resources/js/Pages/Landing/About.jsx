import React from "react";
import Navbar from "../../Components/MainNavbar";
import Footer from "../../Components/Footer";
import ServiceItem from "../../Components/ServiceItem";
import people from "@/src/people.png";

const About = () => {
    return (
        <>
            <Navbar justSticky={true} />
            <section className="px-24 mt-20">
                <div className="flex flex-col gap-y-10 justify-center items-center">
                    <h1 className="text-6xl text-center  font-bold">
                        Klinik Asyifaa Mariuk Providing{" "}
                        <span className="text-thePrimary underline underline-offset-2">
                            Best and Affordable
                        </span>{" "}
                        Health Care.
                    </h1>
                    <p className="text-gray-400 text-center w-[800px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed dictum venenatis rhoncus. Aliquam dictum enim quam,
                        vitae commodo odio lobortis a.
                    </p>
                </div>
            </section>
            <section className="px-10 mt-16">
                <div className="grid overflow-hidden sm:grid-cols-5 grid-cols-3 sm:grid-rows-2 grid-rows-3 gap-1">
                    <div className="bg-sky-400 row-span-3">1</div>
                    <div className="bg-sky-400 col-span-2">2</div>
                    <div className="bg-sky-400">3</div>
                    <div className="bg-sky-400 row-span-3">4</div>
                    <div className="bg-sky-400">5</div>
                    <div className="bg-sky-400 col-span-2">6</div>
                </div>
            </section>
            <section className="px-24 mt-20">
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
            <section className="px-24 mt-20 bg-gray-50">
                <div className="flex flex-wrap py-10">
                    <div className="w-1/2 flex flex-col gap-y-6">
                        <h1 className="text-6xl text-bold">
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
                    <div className="w-1/2 flex justify-center items-center">
                        <div className="grid overflow-hidden grid-lines grid-cols-2 grid-rows-2 gap-2">
                            <div className="bg-sky-500">1</div>
                            <div className="bg-sky-500 row-span-2">2</div>
                            <div className="bg-sky-500 row-span-2">3</div>
                            <div className="bg-sky-500">4</div>
                        </div>
                    </div>
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
            <section className="h-[456px] w-full bg-white px-24 flex flex-col justify-center items-center gap-y-5">
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
            <Footer />
        </>
    );
};

export default About;
