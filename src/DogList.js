import React, { Component } from 'react';
import './DogList.css'
import { Link } from 'react-router-dom';

class DogList extends Component {
    render() {
        return (
          <div className="DogList">
            <h1 className="display-1 text-center my-5">Adopt a Dog!</h1>

            <div className="row">
              {this.props.dogs.map((d) => (
                <div className="col-lg-4 text-center dog" key={d.name}>
                  <img src={d.src} alt={d.name}></img>
                  <h3 className='mt-2'>
                    <Link to={`/dogs/${d.name}`} className="underline">{d.name}</Link>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        );
    }
}

export default DogList;
