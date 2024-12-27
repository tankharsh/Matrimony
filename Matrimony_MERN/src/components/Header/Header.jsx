import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { logout, isLoggedIn } from '../services/authService';
import { toast } from 'react-toastify';
import { CgProfile } from "react-icons/cg";
import LogoutConfirmation from '../Home/LogoutConfirmation';

export default function Header() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthStatus = () => {
            const loggedIn = isLoggedIn();
            setIsUserLoggedIn(loggedIn);
        };
        checkAuthStatus();
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Handle logout confirmation and process
    const confirmLogout = () => {
        logout();
        setIsUserLoggedIn(false);
        toast.success('Logout successful');
        setShowLogoutModal(false);
        navigate('/');
    };


    const handleLogoutClick = () => {
        setShowLogoutModal(true);
    };


    const closeLogoutModal = () => {
        setShowLogoutModal(false);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="#" className="flex items-center">
                        <img src={logo} className="mr-3 h-10" alt="Logo" />
                    </Link>

                    <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
                        <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:w-auto lg:items-center w-full`}>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {isUserLoggedIn ? (
                                <LoggedInLinks handleLogoutClick={handleLogoutClick} />
                            ) : (
                                <LoggedOutLinks />
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Render the Logout Confirmation Modal */}
            <LogoutConfirmation
                show={showLogoutModal}
                onClose={closeLogoutModal}
                onConfirm={confirmLogout}
            />
        </header>
    );
}

// Links for logged-out users
const LoggedOutLinks = () => (
    <>
        <li>
            <NavLink
                exact
                to="/"
                className="block py-2 pr-4 pl-3 text-gray-700 hover:text-purple-700"
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className="block py-2 pr-4 pl-3 text-gray-700 hover:text-purple-700"
            >
                About
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive }) => `block py-2 pr-4 pl-3 ${isActive ? "text-purple-700" : "text-gray-700"} text-gray-700 hover:text-purple-700`}
            >
                Contact
            </NavLink>
        </li>
    </>
);

// Links for logged-in users
const LoggedInLinks = ({ handleLogoutClick }) => (
    <>
        <li>
            <NavLink
                to="/about"
                className={({ isActive }) => `block py-2 pr-4 pl-3 ${isActive ? "text-purple-700 " : "text-gray-700"} text-gray-700 hover:text-purple-700`}
            >
                About
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive }) => `block py-2 pr-4 pl-3 ${isActive ? "text-purple-700" : "text-gray-700"} text-gray-700 hover:text-purple-700`}
            >
                Contact
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashbord"
                className={({ isActive }) => `block py-2 pr-4 pl-3 ${isActive ? "text-purple-700" : "text-gray-700"} text-gray-700 hover:text-purple-700`}
            >
                Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/datingTip"
                className={({ isActive }) => `block py-2 pr-4 pl-3 ${isActive ? "text-purple-700" : "text-gray-700"} text-gray-700 hover:text-purple-700`}
            >
                DatingTips
            </NavLink>
        </li>
        <li>
            <button
                onClick={handleLogoutClick}
                className="block py-2 pr-4 pl-3 text-red-500 hover:text-purple-700"
            >
                Logout
            </button>
        </li>
    </>
);
