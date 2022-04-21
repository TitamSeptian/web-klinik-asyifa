import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

const Sidebar = () => {
    const menus = [
        { menu: "Dashboard", href: "/" },
        { menu: "Tags", href: "/" },
        { menu: "Article", href: "/" },
        { menu: "Content", href: "/" },
        { menu: "Image", href: "/" },
    ];
    return (
        <>
            <aside className="lg:w-[400px] w-[300px] max-w-full px-8 overflow-y-auto py-4 mt-14 lg:static absolute inset-y-0 bg-white  z-10">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <span className="font['poppins'] uppercase tracking-widest text-gray-400 font-bold px-6 text-sm">
                            Admin
                        </span>
                        {menus.map((menu, index) => (
                            <Menu
                                pageActive={true}
                                key={index}
                                href={menu.href}
                            >
                                {menu.menu}
                            </Menu>
                        ))}
                    </div>
                    <div className="space-y-2">
                        <span className="font['poppins'] uppercase tracking-widest text-gray-400 font-bold px-6 text-sm">
                            Account
                        </span>
                        <div className="grid gap-2">
                            <a
                                href="#"
                                className="hover:bg-gray-100 py-4 px-6 rounded-xl flex items-center gap-2 transition-all duration-300 group"
                            >
                                <i className="bx bx-user text-xl text-gray-400 group-hover:text-gray-600 transition-all duration-300" />
                                <span className="font-semibold text-gray-400 group-hover:text-gray-600 transition-all duration-300">
                                    Profile
                                </span>
                            </a>
                        </div>
                        <div className="grid gap-2">
                            <a
                                href="#"
                                className="hover:bg-gray-100 py-4 px-6 rounded-xl flex items-center gap-2 transition-all duration-300 group"
                            >
                                <i className="bx bx-cog text-xl text-gray-400 group-hover:text-gray-600 transition-all duration-300" />
                                <span className="font-semibold text-gray-400 group-hover:text-gray-600 transition-all duration-300">
                                    Setting
                                </span>
                            </a>
                        </div>
                        <form
                            method="POST"
                            action="/logout"
                            className="grid gap-2"
                        >
                            <input
                                type="hidden"
                                name="_token"
                                defaultValue="XarluafX5xxU9WsqqBvevZCj1Gqhb9B542KsGHW1"
                            />{" "}
                            <a
                                href="/logout"
                                onclick="event.preventDefault(); this.closest('form').submit();"
                                className="hover:bg-gray-100 py-4 px-6 rounded-xl flex items-center gap-2 transition-all duration-300 group"
                            >
                                <i className="bx bx-log-out text-xl text-gray-400 group-hover:text-gray-600 transition-all duration-300" />
                                <span className="font-semibold text-gray-400 group-hover:text-gray-600 transition-all duration-300">
                                    Logout
                                </span>
                            </a>
                        </form>
                    </div>
                </div>
            </aside>
        </>
    );
};

const Menu = React.memo(({ children, href, pageActive }) => {
    console.log(children);
    return (
        <>
            <div className="grid gap-2 hover:bg-gray-100 rounded-xl top-6 transition-all duration-300">
                <InertiaLink
                    as="a"
                    href={href}
                    className={`${
                        href == pageActive ? `bg-gray-100 ` : ``
                    } py-4 px-6 rounded-xl flex items-center gap-2 transition-all duration-300 group text-gray-400`}
                >
                    <i className="bx bx-category text-xl text-gray-400 transition-all duration-300 group-hover:text-gray-600 group-hover:bg-gray-100" />
                    <span className="font-semibold text-gray-400 transition-all duration-300 group-hover:text-gray-600 group-hover:bg-gray-100">
                        {children}
                    </span>
                </InertiaLink>
            </div>
        </>
    );
});

export default Sidebar;
