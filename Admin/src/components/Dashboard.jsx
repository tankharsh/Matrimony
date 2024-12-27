import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Dashboard = () => {
    const [totalUsers, setTotalUsers] = useState(0);

    // Fetch user count
    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/admin/users");
                setTotalUsers(response.data.length);
            } catch (error) {
                console.error("Error fetching user data", error);
            }
        };

        fetchUserCount();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-500 p-4 rounded shadow-md transition-transform transform hover:scale-105">
                    <h3 className="font-semibold">Total Users</h3>
                    <p className="text-lg">{totalUsers}</p> {/* Dynamically display total users */}
                </div>
                <div className="bg-green-600 p-4 rounded shadow-md transition-transform transform hover:scale-105">
                    <Link
                        to="/adduser" className="mr-4 font-semibold hover:text-black-400"> Add New Registrations
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
