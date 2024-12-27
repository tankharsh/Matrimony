import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Models/Model";
import { Link } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    // Fetch data from backend
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/admin/users");
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchUsers();
    }, []);

    // Delete user function
    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/admin/users/${id}`);
            setUsers(users.filter((user) => user._id !== id));
            setIsModalOpen(false);
        } catch (err) {
            console.error("Error deleting user", err);
        }
    };

    // delete confirmation
    const confirmDelete = (id) => {
        setUserToDelete(id);
        setIsModalOpen(true);
    };

    return (
        <div className="overflow-x-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Image</th>
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Age</th>
                        <th className="py-3 px-6 text-left">Email</th>
                        <th className="py-3 px-6 text-left">Gender</th>
                        <th className="py-3 px-6 text-left">Phone</th>
                        <th className="py-3 px-6 text-left">Address</th>
                        <th className="py-3 px-6 text-left">City</th>
                        <th className="py-3 px-6 text-left">Salary</th>
                        <th className="py-3 px-6 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {users.map((item) => (
                        <tr
                            key={item._id}
                            className="border-b border-gray-200 hover:bg-gray-100"
                        >
                            
                            <td className="py-3 px-6">
                                <img
                                    src={`http://localhost:3000/${item.image}`}
                                    alt={item.name}
                                    className="rounded-full h-20 w-20"
                                />
                            </td>
                            <td className="py-3 px-6">{item.name}</td>
                            <td className="py-3 px-6">{item.age}</td>
                            <td className="py-3 px-6">{item.email}</td>
                            <td className="py-3 px-6">{item.gender}</td>
                            <td className="py-3 px-6">{item.phone}</td>
                            <td className="py-3 px-6">{item.address}</td>
                            <td className="py-3 px-6">{item.city}</td>
                            <td className="py-3 px-6">{item.aIncome}</td>
                            <td className="py-3 px-6">
                                <button
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                                    onClick={() => confirmDelete(item._id)} // Corrected user ID reference
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* delete popup */}
            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={() => {
                        if (userToDelete) deleteUser(userToDelete);
                    }}
                />
            )}
        </div>
    );
}

export default Users;
