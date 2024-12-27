import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Adduser() {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        height: '',
        weight: '',
        profession: '',
        education: '',
        address: '',
        city: '',
        salary: '',
        fatherName: '',
        fatherOccupation: '',
        motherName: '',
        motherOccupation: '',
        fMember: '',
        aIncome: '',
        jointFamily: false,
        handicapped: false,
        religion: '',
        cast: '',
        subCast: '',
        aboutMe: '',
        status: '',
        password: '',
        image: null,
    });

    const incomeOptions = [
        { value: '', label: 'Select Annual Income' },
        { value: 'below_1_lakh', label: 'Below 1 Lakh' },
        { value: '1_5_lakh', label: '1-5 Lakh' },
        { value: '5_10_lakh', label: '5-10 Lakh' },
        { value: '10_20_lakh', label: '10-20 Lakh' },
        { value: 'above_20_lakh', label: 'Above 20 Lakh' },
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        try {
            const res = await axios.post('http://localhost:3000/api/users', data);
            console.log(res.data);
            toast.success('User registered successfully!');
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (err) {
            console.error(err);
            toast.error(`Error: ${err.response.data.error}`);
        }
    };

    return (

        <>
            <div className="bg-cover min-h-screen p-5 "
                style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2014/09/07/16/53/couple-437968_1280.jpg)' }}>

                <div className="flex items-center justify-center min-h-screen">

                    <div className="w-1/2 p-4 m-auto bg-white shadow-lg rounded-lg">
                        <form onSubmit={handleSubmit} className="p-6">
                            <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">New Registration Form</h2>

                            <div className="grid grid-cols-2 gap-8">
                                {/* Step 1 - Personal Information */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter Full Name"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dob"
                                        max="2004-05-15"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter Your Email"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Phone No</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter Phone Number"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            checked={formData.gender === "Male"}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        <label className="mr-4">Male</label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            checked={formData.gender === "Female"}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        <label>Female</label>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Age</label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        placeholder="Enter Age"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Height</label>
                                    <input
                                        type="text"
                                        name="height"
                                        value={formData.height}
                                        onChange={handleChange}
                                        placeholder="Enter Height"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Weight</label>
                                    <input
                                        type="text"
                                        name="weight"
                                        value={formData.weight}
                                        onChange={handleChange}
                                        placeholder="Enter Weight (kg)"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8 mt-8">
                                {/* Step 2 - Profession and Education */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Profession</label>
                                    <input
                                        type="text"
                                        name="profession"
                                        value={formData.profession}
                                        onChange={handleChange}
                                        placeholder="Enter Profession"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Education</label>
                                    <input
                                        type="text"
                                        name="education"
                                        value={formData.education}
                                        onChange={handleChange}
                                        placeholder="Enter Education"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                                    <textarea
                                        name="address"
                                        rows="4"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Enter Address"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="Enter City"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Salary</label>
                                    <input
                                        type="number"
                                        name="salary"
                                        value={formData.salary}
                                        onChange={handleChange}
                                        placeholder="Enter Salary"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4 flex items-center">
                                    <input
                                        type="checkbox"
                                        name="handicapped"
                                        checked={formData.handicapped}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label className="text-gray-700">Handicapped</label>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8 mt-8">
                                {/* Step 3 - Family Information */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Father's Name</label>
                                    <input
                                        type="text"
                                        name="fatherName"
                                        value={formData.fatherName}
                                        onChange={handleChange}
                                        placeholder="Enter Father's Name"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Father's Occupation</label>
                                    <input
                                        type="text"
                                        name="fatherOccupation"
                                        value={formData.fatherOccupation}
                                        onChange={handleChange}
                                        placeholder="Enter Father's Occupation"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Mother's Name</label>
                                    <input
                                        type="text"
                                        name="motherName"
                                        value={formData.motherName}
                                        onChange={handleChange}
                                        placeholder="Enter Mother's Name"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Mother's Occupation</label>
                                    <input
                                        type="text"
                                        name="motherOccupation"
                                        value={formData.motherOccupation}
                                        onChange={handleChange}
                                        placeholder="Enter Mother's Occupation"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Family Member</label>
                                    <input
                                        type="number"
                                        name="fMember"
                                        value={formData.fMember}
                                        onChange={handleChange}
                                        placeholder="Enter Family Member"
                                        className="w-full px-3 py-2 border transition-transform duration-300 hover:scale-95 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Annual Income</label>
                                    <select
                                        name="aIncome"
                                        value={formData.aIncome}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border transition-transform duration-300 hover:scale-95 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    >
                                        {incomeOptions.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="checkbox"
                                        name="jointFamily"
                                        checked={formData.jointFamily}
                                        onChange={handleChange}
                                        className="mr-2 transition-transform duration-300 hover:scale-95"
                                    />
                                    <label className="text-gray-700">Joint Family</label>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Religion</label>
                                    <input
                                        type="text"
                                        name="religion"
                                        value={formData.religion}
                                        onChange={handleChange}
                                        placeholder="Enter Religion"
                                        className="w-full px-3 py-2 border transition-transform duration-300 hover:scale-95 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Cast</label>
                                    <input
                                        type="text"
                                        name="cast"
                                        value={formData.cast}
                                        onChange={handleChange}
                                        placeholder="Enter Cast"
                                        className="w-full px-3 py-2 border transition-transform duration-300 hover:scale-95 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Sub Cast</label>
                                    <input
                                        type="text"
                                        name="subCast"
                                        value={formData.subCast}
                                        onChange={handleChange}
                                        placeholder="Enter sub cast"
                                        className="w-full px-3 py-2 border transition-transform duration-300 hover:scale-95 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">About ME</label>
                                    <textarea
                                        type="text"
                                        name="aboutMe"
                                        rows="4"
                                        cols="50"
                                        value={formData.aboutMe}
                                        onChange={handleChange}
                                        placeholder="About ME"
                                        className="w-full px-3 py-2 border transition-transform duration-300 hover:scale-95 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">status</label>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="status"
                                            value="Single"
                                            checked={formData.status === 'Single'}
                                            onChange={handleChange}
                                            className="mr-2 transition-transform duration-300 hover:scale-95"
                                        />
                                        <label className="mr-4">Single</label>

                                        <input
                                            type="radio"
                                            name="status"
                                            value="divorce"
                                            checked={formData.status === 'divorce'}
                                            onChange={handleChange}
                                            className="mr-2 transition-transform duration-300 hover:scale-95"
                                        />
                                        <label className="mr-4">Devorce</label>

                                        <input
                                            type="radio"
                                            name="status"
                                            value="widow"
                                            checked={formData.status === 'widow'}
                                            onChange={handleChange}
                                            className="mr-2 transition-transform duration-300 hover:scale-95"
                                        />
                                        <label>Widow</label>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter password"
                                        className="w-full px-3 py-2 transition-transform duration-300 hover:scale-95 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>


                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Upload Image</label>
                                    <input
                                        type="file"
                                        name="image"
                                        onChange={handleImageChange}
                                        className="w-full px-3 py-2 transition-transform duration-300 hover:scale-95 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="mb-4 col-span-2">
                                    <button
                                        type="submit"
                                        className="w-full py-2 px-4 bg-purple-600 text-white rounded-md transition-transform duration-300 hover:scale-95"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>

                        <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Adduser