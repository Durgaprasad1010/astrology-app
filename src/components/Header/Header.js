import React from 'react'
import './Header.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'


function Header() {
    return (
        <div>
            <div className="navigation-bar">
                <Router>
                    <div className="navigation-container">

                        <div className='navigation-logo'>
                            <Link to="/">Guruji</Link>
                        </div>
                        <div className="nav-list">
                            <Link to="/">Home</Link>
                            <Link to="/">Call with Astrologer</Link>
                            <Link to="/">Live(Coming soon)</Link>
                        </div>
                        <div className="profile">Profile</div>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default Header