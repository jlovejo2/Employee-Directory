import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>
                Home Page
            </Link>
            <div>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to='/' className={window.location.pathname === '/' || window.location.path === '/about' ? 'nav-link active' : 'nav-link'} >
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/employee' className={window.location.pathname === '/' || window.location.path === '/employee' ? 'nav-link active' : 'nav-link'} >
                            Employees
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>           
    );
}

export default Navbar;