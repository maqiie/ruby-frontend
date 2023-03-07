import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div className="flex flex-row justify-center items-center h-screen bg-gradient-to-r from-sky-100 to-blue-100">
                <div className="w-1/2 bg-gradient-to-b from-black to-white"></div>
                <div className="w-1/2 flex flex-col justify-center items-center bg-blue-100">
                    <div className="flex justify-center border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow" style={{ width: '400px', height: '200px' }}>
                        <div className="border-r border-gray-400">
                            <Link to="/login" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-l-lg">
                                Log in
                            </Link>
                        </div>
                        <div className="border-l border-gray-400">
                            <Link to="/signup" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r-lg">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;


