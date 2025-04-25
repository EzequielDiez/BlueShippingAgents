import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-[#1D4F87] px-4 text-white">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center w-32">
                    <img
                        src="/images/logo-header.svg"
                        alt="Blue Shipping Agents Logo"
                        className="w-full h-auto"
                    />
                </div>
                <ul className="flex list-none gap-8 m-0 p-0">
                    <li>
                        <Link to="/" className="text-white no-underline hover:text-gray-300 font-['Sahar']">
                            INICIO
                        </Link>
                    </li>
                    <li>
                        <Link to="/nosotros" className="text-white no-underline hover:text-gray-300 font-['Sahar']">
                            NOSOTROS
                        </Link>
                    </li>
                    <li>
                        <Link to="/servicios" className="text-white no-underline hover:text-gray-300 font-['Sahar']">
                            SERVICIOS
                        </Link>
                    </li>
                    <li>
                        <Link to="/puertos" className="text-white no-underline hover:text-gray-300 font-['Sahar']">
                            PUERTOS
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacto" className="text-white no-underline hover:text-gray-300 font-['Sahar']">
                            CONTACTO
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar; 