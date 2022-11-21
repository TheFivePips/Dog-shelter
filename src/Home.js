import React, { Component } from 'react';
import './Home.css'


class Home extends Component {
    render() {
        return (
          <div className="Home">
            <h1 className="display-1 text-center">Dog List</h1>
            <div className="container">
              <div className="row">
                {this.props.dogs.map(d => (
                    <div className='col-lg-4 text-center dog' key={d.name}>
                        <img src={d.src} alt={d.name}></img>
                        <h3>{d.name}</h3>
                    </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
}

export default Home;
