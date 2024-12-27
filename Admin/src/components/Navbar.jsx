import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({handleLogout}) => {
    return (
        <div className="flex justify-between items-center bg-gray-800 p-4 text-white">
            <h1 className="text-lg font-bold">Admin Panel</h1>
            <div>
                <Link to="/" className="mr-4 hover:text-gray-400">Home</Link>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;
