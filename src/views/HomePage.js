import React, { Component } from 'react';
import Logo from '../assets/logo.png';

class HomePage extends Component {

    logInClick = (e) => {
        e.preventDefault();
        const { history } = this.props;
        history.push('/login');
    }

    signUpClick = (e) => {
        e.preventDefault();
        const { history } = this.props;
        if (history) {
            history.push('/signup');
        }
    }
    

    componentDidMount() {
        if (localStorage.token) {
            const { history } = this.props;
            history.push('/projects');
        }
    }

    render() {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
                <div className="w-1/2">
                    <img className="mx-auto" id='home-logo' src={Logo} alt="Logo" />
                </div>
                <div className="flex justify-center mt-8 space-x-4">
                    <button onClick={this.logInClick} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-700 rounded">
                        Log in
                    </button>
                    <button onClick={this.signUpClick} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-700 rounded">
                        Sign up
                    </button>
                </div>
            </div>
        )
    }
}

export default HomePage;
