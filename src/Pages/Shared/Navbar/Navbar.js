import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logoTwo.png';

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li><Link className='font-semibold rounded-xl shadow-xl' to='/'>Home</Link></li>

        <li><Link className='font-semibold ' to='/national'>National</Link></li>
        <li><Link className='font-semibold ' to='/international'>International</Link></li>
        <li><Link className='font-semibold ' to='/cultural'>Cultural</Link></li>
        <li><Link className='font-semibold ' to='/entertainment'>Entertainment</Link></li>
        <li><Link className='font-semibold ' to='/sports'>Sports</Link></li>

        <li><Link className='font-semibold ' to='/submityourwritings'>Submit Your Writtings</Link></li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-2xl">
                    <figure>
                        <img src={logo} className="w-[15%] lg:w-[23%] md:w-[20%] h" alt=''/>
                    </figure>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="bg-yellow-400 hover:bg-amber-600 text-gray-900 p-3 rounded-xl text-lg">Get Started</Link>
            </div>
        </div >
    );
};

export default Navbar;