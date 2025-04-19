import React, { useState } from 'react';
import Header from './Header';
import { useLocation } from 'react-router-dom';
function BGComponent() {
    const location = useLocation();

    const path = location.pathname;

    return (
        <div className="relative h-96">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/background.jpg')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-white opacity-20"></div>
            </div>

            {/* Content (like Header) */}
            <div className="relative z-10">
                <Header />
                {/* Dynamic Heading */}
                {
                    path === '/' ? (<div>
                        <h1 className="text-4xl text-center text-white mt-10 max-w-4xl mx-auto">This is the Best</h1>
                        <h1 className="md:text-6xl text-4xl font-semibold text-center text-white mt-10 max-w-2xl mx-auto">Room Reservation Website</h1>
                    </div>
                    ) : (
                        <h1 className="text-4xl text-center text-white mt-10 max-w-4xl mx-auto">{path.replace('/', '').charAt(0).toUpperCase() + path.split('/')[1].slice(1)}</h1>
                    )
                }
            </div>
        </div>
    );
}

export default BGComponent;
