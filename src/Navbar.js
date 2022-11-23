import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
class Navbar extends Component {
    render() {
        const dogLinks = this.props.dogs.map((dog) => (
          <li>
            <NavLink exact
              to={`/dogs/${dog.name}`}
              key={dog}
              className="nav-link dropdown-item bg-dark"
            >
              {dog.name}
            </NavLink>
          </li>
        ));
        return (
            <div>
                <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                 <NavLink exact  to={'/dogs'}className="navbar-brand">Dog-Shelter</NavLink>
                                <li className="nav-item dropdown">
                                    <NavLink exact className="nav-link dropdown-toggle" to={'/tbd'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dogs
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        {dogLinks}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
