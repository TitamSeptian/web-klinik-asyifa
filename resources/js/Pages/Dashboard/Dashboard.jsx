import React from "react";
import Layout from "@/Components/Layout";

const Dashboard = () => {
    return (
        <>
            <h1 className="text-gray-800 text-3xl font-black capitalize after:content-[''] after:block after:w-10 after:h-1 after:bg-gray-800 after:rounded-full">
                Welcome!!
            </h1>
            <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                <h2 className="sr-only">Statistic</h2>
                <div className="py-4 px-6 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-4">
                        <div className="h-14 w-14 grid place-items-center rounded-xl bg-gray-800 text-white text-xl">
                            <i className="bx bx-home-heart" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-600 text-lg">
                                The Data
                            </span>
                            <span className="text-gray-800 text-2xl font-bold font-['poppins']">
                                14
                            </span>
                        </div>
                    </div>
                </div>
                <div className="py-4 px-6 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-4">
                        <div className="h-14 w-14 grid place-items-center rounded-xl bg-gray-800 text-white text-xl">
                            <i className="bx bx-home-smile" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-600 text-lg">
                                The Data
                            </span>
                            <span className="text-gray-800 text-2xl font-bold font-['poppins']">
                                7
                            </span>
                        </div>
                    </div>
                </div>
                <div className="py-4 px-6 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-4">
                        <div className="h-14 w-14 grid place-items-center rounded-xl bg-gray-800 text-white text-xl">
                            <i className="bx bx-images" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-600 text-lg">
                                The Data
                            </span>
                            <span className="text-gray-800 text-2xl font-bold font-['poppins']">
                                13
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Dashboard.layout = (page) => <Layout children={page} />;

export default Dashboard;
