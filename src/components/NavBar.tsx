import React from "react";

const NavBar = () => {
    const navItems = [
        { label: "How to get started", href: "#" },
        { label: "Example Templates", href: "#" },
        { label: "Back to Portfolio Website", href: "www.worldofrick.com" }
    ];

    return (
        <>
            <nav className="flex justify-around bg-transparent">
                <div className="bg-black text-white">Logo Place Holder</div>
                <div className="flex-grow"></div>
                <ul className="flex justify-evenly space-x-2">
                    {navItems.map((item, index) => (
                        <li key={index} className=" p-3 hover:bg-accent text-accent hover:text-white rounded-full">
                            <a href={item.href} className="block">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default NavBar;