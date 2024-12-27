import React from 'react';
import img from '../../assets/Group_16.jpg';
import SearchForm from './SearchForm';



function Dashboard() {


    return (
        <>
            <div className="relative w-full h-screen bg-center" style={{ backgroundImage: `url(${img})` }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-white text-3xl md:text-5xl font-bold text-center shadow-lg p-4 bg-black bg-opacity-50 rounded-lg">
                        "Love knows no bounds."
                    </h2>
                </div>
            </div>

            <div>
                <SearchForm />
            </div>
        </>
    );
}

export default Dashboard;
