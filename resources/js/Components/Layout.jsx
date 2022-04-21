import React from "react";
import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";
import { usePage } from "@inertiajs/inertia-react";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="relative overflow-x-hidden min-h-screen">
                <section className="flex min-h-screen max-h-screen overflow-hidden relative">
                    <Sidebar />
                    <main className="w-full px-8 overflow-y-auto pt-20 pb-4">
                        <Navbar />
                        <div>{children}</div>
                    </main>
                </section>
            </div>
        </>
    );
};

export default Layout;
