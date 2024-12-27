import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import logo from '../../assets/logo.png';
import pic1 from '../../assets/pic1.jpeg'
import pic2 from '../../assets/pic2.jpeg'
import pic3 from '../../assets/pic3.jpeg'
import pic4 from '../../assets/pic4.jpeg'
import pic5 from '../../assets/pic5.jpeg'


export default function About() {
    return (
        <>
            <div className="py-16 font-poppins bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-10">
                        <div className="md:5/12 lg:w-5/12">
                            <img
                                src={logo}
                                alt="image"
                            />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                                Matrimony
                            </h2>
                            <p className="mt-6 text-gray-600">
                                Welcome to our Matrimony website! We are dedicated to helping individuals find their perfect match. Our platform is designed to bring people together based on shared values, interests, and life goals.
                            </p>
                            <p className="mt-6 text-gray-600">
                                Our mission is to create a safe and trustworthy environment where individuals can connect and build meaningful relationships. We believe that everyone deserves to find love and happiness, and we are here to make that journey easier.
                            </p>
                            <p className="mt-6 text-gray-600">
                                With a user-friendly interface and advanced search features, our website allows you to find potential matches quickly and easily. Join us today and take the first step towards finding your life partner.
                            </p>
                            <p className="mt-6 text-gray-600">
                                Thank you for choosing our Matrimony website. We look forward to being a part of your love story.
                            </p>

                            <div className="flex justify-center mt-10 md:justify-start space-x-6">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                    <i className="fab fa-facebook-f fa-2x"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                                    <i className="fab fa-twitter fa-2x"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                                    <i className="fab fa-linkedin-in fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="bg-purple-500 text-white font-poppins flex justify-center items-center h-24 md:h-32 lg:h-32">
                <p className="mr-4 text-sm md:text-lg lg:text-xl">Your story is waiting to happen!</p>
                <NavLink
                    to="/signup"
                    className="bg-white flex text-red-500 px-4 py-2 rounded border border-white hover:bg-gray-200">
                    Get Started <span className=' justify-center items-center m-1'><FaArrowRight /></span>
                </NavLink>
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

        </>
    );
}