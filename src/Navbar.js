import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                                <Link class="nav-link active" aria-current="page" to={'/'}>Home</Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link" to={'/dog'}>Dog</Link>
                                </li>
                                <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to={'/tbd'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to={'/tbd'}>Another action</Link></li>
                                    <li><Link class="dropdown-item" to={'/tbd'}>Action</Link></li>
                                    <li class="dropdown-divider"><hr></hr></li>
                                    <li><Link class="dropdown-item" to={'/tbd'}>Something else here</Link></li>
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
