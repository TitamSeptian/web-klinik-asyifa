import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="py-2 border-b border-gray-100 backdrop-blur-sm bg-white/30 fixed inset-x-0 top-0 z-50">
                <div className="lg:px-14 px-8 flex justify-between items-center bg-transparent">
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden btn btn-icon">
                            <i className="bx bx-menu-alt-left" />
                        </button>
                        <a href="/">
                            <img
                                src="https://hollux.herokuapp.com/img/brand/logo-1.png"
                                className="w-10 h-10 object-cover rounded-xl"
                                alt="Hollux"
                            />
                        </a>
                    </div>
                    <div className="flex items-center gap-2 bg-transparent">
                        <span>Admin</span>
                        <img
                            src="https://hollux.herokuapp.com/storage/img/avatar/a.png"
                            className="w-10 h-10 object-cover rounded-xl"
                            alt="Admin Abi Noval Fauzi"
                        />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
