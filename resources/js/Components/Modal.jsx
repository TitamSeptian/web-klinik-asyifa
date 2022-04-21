import React from "react";

const Modal = () => {
    return (
        <>
            <div className="hidden">
                <div className="fixed inset-0 overflow-y-auto z-50">
                    <div className="fixed inset-0 bg-black/50"></div>
                    <div className="relative min-h-screen flex items-center justify-center p-4">
                        <div className="relative max-w-md w-full bg-white rounded-xl p-10 overflow-y-auto space-y-4">
                            <div className="text-center space-y-4">
                                <i className="bx bx-check-circle text-8xl text-green-600" />
                                <h2 className="text-3xl font-bold text-gray-800">
                                    Edited Successfully
                                </h2>
                                <p className="tracking-wide text-gray-600 sm:text-base text-sm">
                                    About page updated successfully! Want to see
                                    it?
                                </p>
                            </div>
                            <div className="flex space-x-2 justify-center">
                                <a
                                    href="https://hollux.herokuapp.com/about"
                                    className="btn"
                                >
                                    Yeah!
                                </a>
                                <button
                                    type="button"
                                    className="btn btn-outline"
                                >
                                    Nah!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
