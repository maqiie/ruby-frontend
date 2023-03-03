import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

class HomePage extends Component {

    render() {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
                <div className="w-1/2">
                    <img className="mx-auto" id='home-logo' src={Logo} alt="Logo" />
                </div>
                <div className="flex justify-center mt-8 space-x-4">
                    <Link to="/login" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-700 rounded">
                        Log in
                    </Link>
                    <Link to="/signup" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-700 rounded">
                        Sign up
                    </Link>
                </div>
            </div>
        )
    }
}

export default HomePage;

