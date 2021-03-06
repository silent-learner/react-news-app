import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation()
    const [isOpen, setisOpen] = useState(false)
    const handleOnCLick = () => {
        setisOpen(!isOpen)
    }
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/top" onClick={handleOnCLick}>NewsApp</Link>
                <button className="custom-toggler navbar-toggler text-secondary" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={isOpen ? true : false} aria-label="Toggle navigation" onClick={handleOnCLick}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${!isOpen ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" onClick={handleOnCLick}>
                            <Link className={`nav-link ${location.pathname === '/business' ? 'active' : ''}`} to="/business">Business</Link>
                        </li>
                        <li className="nav-item" onClick={handleOnCLick}>
                            <Link className={`nav-link ${location.pathname === '/entertainment' ? 'active' : ''}`} to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item" onClick={handleOnCLick}>
                            <Link className={`nav-link ${location.pathname === '/health' ? 'active' : ''}`} to="/health">Health</Link>
                        </li>
                        <li className="nav-item" onClick={handleOnCLick}>
                            <Link className={`nav-link ${location.pathname === '/science' ? 'active' : ''}`} to="/science">Science</Link>
                        </li>
                        <li className="nav-item" onClick={handleOnCLick}>
                            <Link className={`nav-link ${location.pathname === '/sports' ? 'active' : ''}`} to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item" onClick={handleOnCLick}>
                            <Link className={`nav-link ${location.pathname === '/technology' ? 'active' : ''}`} to="/technology">Technology</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
