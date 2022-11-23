import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import DogDetailsWrapper from './DogDetailsWrapper';
import DogList from './DogList';

class Router extends Component {
    render() {
        return (
          <div>
            <Routes>
              <Route path="*" element={<h1>Not Found</h1>}></Route>
              <Route
                exact
                path="/dogs"
                element={<DogList dogs={this.props.dogs} />}
              ></Route>
              <Route
                exact
                path="/dogs/:name"
                element={<DogDetailsWrapper dogs={this.props.dogs} />}
              ></Route>
              
            </Routes>
          </div>
        );
    }
}

export default Router;
