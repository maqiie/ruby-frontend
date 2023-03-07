
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
return (
<div>
<nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
<div className="flex items-center flex-shrink-0 text-white mr-6">
<span className="font-semibold text-xl tracking-tight">Project Management</span>
</div>
<div className="block lg:hidden">
<button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
</button>
</div>
<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
<div className="text-sm lg:flex-grow">
<Link to="/projectlist" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
All Projects
</Link>
<Link to="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
Create Project
</Link>
<Link to="/users" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white">
Users
</Link>
<Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white ml-auto">
Logout
</Link>
</div>
</div>
</nav>


  <div className="container mx-auto mt-10 px-6">
    <h1 className="text-4xl font-bold mb-8">Welcome to our Project Management Platform!</h1>
    <p className="text-gray-700 mb-8">Our platform is designed to help you manage your projects more efficiently and effectively. With features such as task tracking, team collaboration, and progress reporting, you'll be able to keep your projects on track and ensure timely delivery.</p>

    <h2 className="text-2xl font-bold mb-4">Features</h2>
    <ul className="list-disc list-inside mb-8">
      <li>Task Tracking: Easily keep track of tasks and their progress. Assign tasks to team members and monitor their completion.</li>
      <li>Team Collaboration: Keep everyone on the same page with our team collaboration features. Share files, assign tasks, and communicate in real-time.</li>
      <li>Progress Reporting: Get a high-level view of your project's progress with our reporting features. Track key metrics and identify areas for improvement.</li>
    </ul>

    <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
    <p className="text-gray-700 mb-8">Our platform is designed to be user-friendly and intuitive, so you can get started right away. Plus, our dedicated support team is always available to help you with any questions or issues you may have.</p>

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Get Started Today
    </button>
    </div>
     </div>
   );
}

 export default LandingPage;