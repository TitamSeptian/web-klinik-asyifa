import React from "react";
import doctor from "@/src/female-doctor.png";
import smallDoctor from "@/src/dr-small.png";
import smallDoctor2 from "@/src/dr-small-2.png";
import "boxicons";
const Landing = () => {
    return (
        <>
            <section className="overflow-hidden px-24 relative">
                <div className="grid sm:grid-cols-2 grid-cols-1">
                    <div className="container flex flex-col gap-y-3 justify-center divide-x divide-error-700">
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
                        <div className="buttons">
                            <button
                                className="py-2 bg-error-600 rounded-md px-2 text-white mx-auto"
                                type="button"
                            >
                                Primary Button
                            </button>
                            <button
                                className="py-2 outline outline-error-300 outline-1 mx-auto rounded-md px-2 text-error-700 ml-2"
                                type="button"
                            >
                                Secondary
                            </button>
                        </div>
                    </div>
                    <div className="container relative">
                        <span className="absolute -top-48 -z-10">
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
                    <div className="sm:col-span-2 bg-thePrimary flex px-3 py-16 items-center rounded-md justify-around text-white mx-auto">
                        <div className="flex gap-x-2">
                            <box-icon
                                name="time"
                                type="regular"
                                color="white"
                            ></box-icon>
                            <div className="text-white">
                                <h1 className="text-xl font-semibold">
                                    Opening Hours
                                </h1>
                                <p className="font-light">Monday - Sunday</p>
                                <p className="font-light">
                                    06:00 AM - 09:00 PM
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-2">
                            <box-icon
                                name="phone"
                                type="regular"
                                color="white"
                            ></box-icon>
                            <div className="text-white">
                                <h1 className="text-xl font-semibold">
                                    Contact
                                </h1>
                                <p className="font-light">
                                    klinikasyifamariuk@medical.com
                                </p>
                                <p className="font-light">+62 821-1188-8903</p>
                            </div>
                        </div>
                        <div className="flex gap-x-2 w-1/3">
                            <box-icon
                                name="location-plus"
                                type="regular"
                                color="white"
                            ></box-icon>
                            <div className="text-white">
                                <h1 className="text-xl font-semibold">
                                    Location
                                </h1>
                                <p className="font-light">
                                    Jl. Karanganyar No.48, Margaluyu,
                                    Tanjungsari, Kab. Sumedang, Jawa Barat POS
                                    45362
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white absolute top-1/4 right-56 px-6 py-4 rounded-md flex flex-col gap-y-2">
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
                            <h2 className="font-semibold">Dr. Bagus</h2>
                            <h2>Ear spesialist</h2>
                        </div>
                    </a>
                    <button className="py-2 bg-error-600 rounded-md px-2 text-white mx-auto block">
                        Find a Doctor
                    </button>
                </div>
            </section>
            <section className="px-24">
                <div class="grid sm:grid-cols-2 grid-cols-1">
                    <div class="bg-sky-300">01</div>
                    <div class=" bg-grenn">02</div>
                </div>
            </section>
        </>
    );
};

export default Landing;
