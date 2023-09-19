import React from "react";

const NavBar = () => {
    const navItems = [
        { label: "How to get started", href: "#" },
        { label: "Example Templates", href: "#" },
        { label: "Improve your resume", href: "#" },
        { label: "Back to Portfolio Website", href: "www.worldofrick.com" }
    ];

    return (
        <>
            <nav className="flex justify-around bg-secondary">
                <div className="bg-black text-white">Logo Place Holder</div>
                <div className="flex-grow"></div>
                <ul className="flex justify-evenly">
                    {navItems.map((item, index) => (
                        <li key={index} className="border border-black p-2 hover:bg-accent">
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