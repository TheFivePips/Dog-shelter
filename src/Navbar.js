import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={'/'}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to={'/dogs'}>Dogs</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to={'/tbd'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="dropdown-item" to={'/tbd'}>Another action</NavLink></li>
                                        <li><NavLink className="dropdown-item" to={'/tbd'}>Action</NavLink></li>
                                        <li className="dropdown-divider"><hr></hr></li>
                                        <li><NavLink className="dropdown-item" to={'/tbd'}>Something else here</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
