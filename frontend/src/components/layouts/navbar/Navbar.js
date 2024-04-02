'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Logo from '@/components/compoenet/Logo';
import Buttons from '@/components/compoenet/Buttons';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const navLink = [
        { name: "Home" },
        { name: "Discovers" },
        { name: "Pages" },
        { name: "Contact" }
    ];

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='bg-white sticky top-0'>
            <nav className='flex w-full lg:w-[90%] items-center justify-between mx-auto px-[20px] py-[16px] sticky top-0'>
                <div className='flex items-center gap-x-16'>
                    <Logo />
                    {/* Navigation links for large screens */}
                    <div className={`hidden lg:flex gap-x-8 text-navcolor ${showMenu ? 'hidden' : 'block'}`}>
                        {navLink.map((item, index) => (
                            <p key={index}> {item.name}</p>
                        ))}
                    </div>
                </div>
                {/* Toggle button for small screens */}
                <FontAwesomeIcon icon={faBars} className='lg:hidden cursor-pointer' onClick={toggleMenu}/>
                {/* Buttons visible on medium and large screens */}
                <div className='hidden lg:flex gap-x-8'>
                    <Buttons btnName={'Apps'} />
                    <Buttons btnName={'Supports'} style={{ padding: '10px', color: 'white' }} />
                </div>
            </nav>
            {/* Responsive menu for small screens */}
            {showMenu && (
                <div className="lg:hidden">
                    {navLink.map((item, index) => (
                        <p key={index}> {item.name}</p>
                    ))}
                </div>
            )}
        </div>
    );
}
