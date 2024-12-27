import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import { VscFeedback } from "react-icons/vsc";

const Sidebar = () => {
    return (
        <div className="bg-gray-900 h-full w-64 p-4 text-white">
            <h2 className="text-xl font-bold mb-4">Matrimony</h2>
            <ul>
                <li className="flex items-center p-2 hover:bg-gray-700 rounded">
                    <FaHome className="mr-2" />
                    <Link to="/">Dashboard</Link>
                </li>
                <li className="flex items-center p-2 hover:bg-gray-700 rounded">
                    <FaUser className="mr-2" />
                    <Link to="/users">Users</Link>
                </li>
                <li className="flex items-center p-2 hover:bg-gray-700 rounded">
                <VscFeedback className="mr-2" />
                    <Link to="/contact">Feedback</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
