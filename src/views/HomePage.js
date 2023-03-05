import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import background from "../assets/project.jpg"

class HomePage extends Component {

    render() {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-cover" style={{ backgroundImage: `url(${background})` }}>
                <div className="w-1/2">
                    
                </div>
                <div className="flex justify-center mt-8 border border-red-500 rounded-lg">
                    <Link to="/login" className="bg-red-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 border-r border-gray-500 hover:border-gray-700 rounded-l-lg mr-4">
                        Log in
                    </Link>
                    <Link to="/signup" className="bg-red-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 border-l border-gray-500 hover:border-gray-700 rounded-r-lg">
                        Sign up
                    </Link>
                    <Link to="/projects" className="bg-red-200 hover:bg-gray">
                        projects
                    </Link>
                    <Link to="/projectlist" className="bg-red-200 hover:bg-gray">
                        projects
                    </Link>
                </div>
            </div>
        )
    }
}

export default HomePage;
