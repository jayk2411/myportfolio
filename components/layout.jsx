//layout.jsx, JAYKUMAR KAKADIYA, 301430863, and 28/01/2024.
import React from 'react';
import { Link } from 'react-router-dom';
import sign from '../src/assets/Free_Sample_By_Wix.jpg';
export default function Layout() {
    return (
        <div className='row p-3'>
            <div className='col-sm-6'>
                <Link to="/">
                    < img src={sign} alt="sign" className="football" width="100px" height="100px" />
                </Link>
            </div>
            <div className='col-sm-6'>
                <nav>
                    <div className='d-flex gap-3'>
                        <Link to="/" className='demo'>Home</Link>
                        <Link to="/about" className='demo'>About</Link>
                        <Link to="/service" className='demo'>Service</Link>
                        <Link to="/project" className='demo'>Project</Link>
                        <Link to="/contact" className='demo'>Contact</Link>
                    </div>
                </nav>
            </div>
        </div>

    );
}
