import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link href="/" className="navbar-brand">
                        <img src="/logo.svg" alt="CUSpire Logo" height="40" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMain">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link href="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/solutions" className="nav-link">Solutions</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/ideas" className="nav-link">Ideas</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/training" className="nav-link">Training</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/membership" className="nav-link">Membership</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link href="/login" className="btn btn-outline-success">Log In</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;