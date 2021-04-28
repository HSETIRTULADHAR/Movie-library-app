import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm text-white bg-success mb-5 justify-content-center">
                <div className="container">
                    <div className="navbar-header brand-text text-lg" href="#">
                        <Link className="navbar-brand text-white text-lg" to="/">
                            InfoFlicks
                        </Link>
                    </div>
                </div>
                <ul className="navbar-nav ml-auto text-light d-inline-block">
                    <li className="nav-item d-inline-block mr-4">
                        <i className="fab fa-imdb fa-5x" id="imdb-logo" />
                    </li>
                    <li className="nav-item d-inline-block mr-4"><span className="fab fa-react fa-3x"></span></li>
                </ul>
            </nav>
        </div>
    );
}
