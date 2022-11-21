import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <NavLink class="nav-link active" aria-current="page" to={'/'}>Home</NavLink>
                                </li>
                                <li class="nav-item">
                                <NavLink class="nav-link" to={'/dog'}>Dog</NavLink>
                                </li>
                                <li class="nav-item dropdown">
                                    <NavLink class="nav-link dropdown-toggle" to={'/tbd'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </NavLink>
                                    <ul class="dropdown-menu">
                                        <li><NavLink class="dropdown-item" to={'/tbd'}>Another action</NavLink></li>
                                        <li><NavLink class="dropdown-item" to={'/tbd'}>Action</NavLink></li>
                                        <li class="dropdown-divider"><hr></hr></li>
                                        <li><NavLink class="dropdown-item" to={'/tbd'}>Something else here</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
