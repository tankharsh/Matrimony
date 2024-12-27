import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineReplayCircleFilled } from "react-icons/md";
import Modal from './Models/Model';



function Contact() {
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users/contacts');
        setContacts(response.data); // Update state with retrieved data
      } catch (error) {
        console.error("Error fetching contacts", error);
      }
    };

    fetchContacts();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/contact/${id}`);
      setUsers(users.filter(user => user._id !== id));
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const confirmDelete = (id) => {
    setUserToDelete(id);
    setIsModalOpen(true);
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Submitted Feedback</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Phone No</th>
            <th className="py-3 px-6 text-left">Message</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            <>
              {contacts.map((contact) => (
                <tr className=" text-gray-600 text-sm leading-normal" key={contact._id}>
                  <td className="py-3 px-6 text-left">{contact.name}</td>
                  <td className="py-3 px-6 text-left">{contact.email}</td>
                  <td className="py-3 px-6 text-left">{contact.phone}</td>
                  <td className="py-3 px-6 text-left">{contact.messages}</td>
                  <td className="py-3 px-6 text-left">
                    <span className='flex text-sm'>
                      <span className='pr-2'>
                        <button className='flex justify-center items-center bg-red-600 hover:bg-red-700 text-white py-2 px-3 font-semibold rounded-md transition-colors duration-300 ease-in-out hover:shadow-lg ' onClick={() => confirmDelete(contact._id)}>
                          <MdDeleteOutline />
                        </button>
                      </span>
                      <span className=''>
                        <button className='flex justify-center items-center bg-green-600 hover:bg-green-700 text-white py-2 px-3 font-semibold rounded-md transition-colors duration-300 ease-in-out hover:shadow-lg '><MdOutlineReplayCircleFilled /></button>
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <td>No contacts found.</td>
          )}
        </tbody>
      </table >
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          if (userToDelete) deleteUser(userToDelete);
        }}
      />
    </>
  )
}

export default Contact