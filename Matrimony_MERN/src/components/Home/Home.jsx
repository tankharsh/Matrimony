import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import { IoIosPeople } from "react-icons/io";
import { FcGraduationCap } from "react-icons/fc";
import { MdWebhook } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import CardSlider from '../CardSlider/CardSlider';
import ServiceSection from '../ServiceSections/ServiceSection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login, isLoggedIn } from '../services/authService';
import pic1 from '../../assets/pic1.jpeg'
import pic2 from '../../assets/pic2.jpeg'
import pic3 from '../../assets/pic3.jpeg'
import pic4 from '../../assets/pic4.jpeg'
import pic5 from '../../assets/pic5.jpeg'


export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthStatus = () => {
            const loggedIn = isLoggedIn();
            setIsUserLoggedIn(loggedIn);
        };
        checkAuthStatus();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await login({ email, password })
            toast.success('Login successfully!');
            setIsUserLoggedIn(true);

            setTimeout(() => {
                navigate('/dashbord');
            }, 1000);
        } catch (err) {
            toast.error(err.response?.data?.error || 'Email and Password are Wrong !!');
        }
    };

    return (
        <div className='scroll-smooth'>
            <div
                className="bg-cover min-h-screen"
                style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2014/09/07/16/53/couple-437968_1280.jpg)' }}
            >
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between  h-full px-4 lg:px-6">
                    <div className="max-w-7xl mx-auto text-center lg:text-left mb-8 lg:mb-0">
                        <h1 className="text-3xl sm:mt-10 font-poppins italic md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Make The{' '}
                            <span className="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-purple-500">
                                <span className="relative text-white">Perfect</span>
                            </span>{' '}
                            Partner
                        </h1>
                        {isUserLoggedIn ? (<>
                        </>) : (<NavLink
                            to="/signup"
                            className="w-full lg:w-64 flex justify-center py-2 px-4 border-2 border-purple-600 rounded-md shadow-sm text-sm font-medium "
                        >
                            Sign Up <span className=' justify-center items-center m-1'><FaArrowRight /></span>
                        </NavLink>)}

                    </div>

                    {/* Login form */}
                    {isUserLoggedIn ? (null) : (<div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg lg:mr-10 mt-40">
                        <h2 className="text-2xl font-bold text-center mb-6">Login Form</h2>
                        <h3 className='text-right pb-3 font-poppins'>Welcome Back !</h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 transition-transform duration-300 hover:scale-95 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 transition-transform duration-300 hover:scale-95 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-transform duration-300 hover:scale-95 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                >
                                    Sign In
                                </button>
                            </div>
                            <div>
                                <span className='pt-5'>Not Registred ?</span> <NavLink to="/signup" className="text-blue-700 underline">Create an Account</NavLink>
                            </div>
                        </form>
                    </div>)}
                </div>
            </div>


            <h1 className="text-xl text-center sm:mt-10 font-poppins italic md:text-4xl lg:text-3xl font-bold text-gray-900 mb-4">
                <span className="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500">
                    <span className="relative text-white">Services</span>
                </span>{' '}
            </h1>
            <div className="flex flex-wrap justify-center items-center my-5 border-blue-100">
                <Card
                    title="Match Makeing"
                    icon={<IoIosPeople />}
                    description="people register on Matrimony looking for someone special. This site is for serious singles looking for a long lasting relationship."
                />
                <Card
                    title="Education"
                    icon={<FcGraduationCap />}
                    description=" highly educated Most of them are successful professionals in their selected fields.
                    "
                />
                <Card
                    title="Matrimony"
                    icon={<MdWebhook />}
                    description="Matrimony uses a smart matchmaking system. We present you matches based on current location, education level & lifestyle choices."
                />
            </div>


            <div className='bg-gray-300 rounded p-5'>

                <div className='flex gap-5 justify-center mt-5 flex-wrap'>
                    <img src={pic1} alt="" width={250} className='rounded-lg shadow-lg transition-transform duration-300 hover:scale-105' />
                    <img src={pic2} alt="" width={250} className='rounded-lg shadow-lg transition-transform duration-300 hover:scale-105' />
                    <img src={pic3} alt="" width={250} className='rounded-lg shadow-lg transition-transform duration-300 hover:scale-105' />
                    <img src={pic4} alt="" width={250} className='rounded-lg shadow-lg transition-transform duration-300 hover:scale-105' />
                    <img src={pic5} alt="" width={250} className='rounded-lg shadow-lg transition-transform duration-300 hover:scale-105' />
                </div>
                <h1 className='text-center mt-14 text-3xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
                    "A life partner is not just a companion; they are a teammate, a confidant, and a best friend."
                </h1>
            </div>

            <ServiceSection />

            <div className="bg-purple-500 text-white font-poppins flex justify-center items-center h-24 md:h-32 lg:h-32">
                <p className="mr-4 text-sm md:text-lg lg:text-xl">Your story is waiting to happen!</p>
                <NavLink
                    to="/signup"
                    className="bg-white flex text-red-500 px-4 py-2 rounded border border-white hover:bg-gray-200">
                    Get Started <span className=' justify-center items-center m-1'><FaArrowRight /></span>
                </NavLink>
            </div>

            <div>
                <div className="flex flex-wrap justify-center items-center my-5 border-blue-100 ">
                    <CardSlider />
                </div>
            </div>
            <ToastContainer />

        </div>
    );
}
