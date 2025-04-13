import React from 'react';
import Link from './Link';

var navLinks = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Portfolio", path: "/portfolio" },
    { id: 5, name: "Contact", path: "/contact" }
  ];
  

const Navbar = () => {
    return (
        <nav>
            <ul className='flex'>
                {
                    navLinks.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
            {/* <ul className='flex'>
                {
                    navLinks.map(route =><li className='mr-10'><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}
        </nav>
    );
};

export default Navbar;