import React, { Component } from 'react';
import './App.css'
import { Routes, Route} from "react-router-dom"
import DogList from './DogList';
import Navbar from './Navbar';
import DogDetailsWrapper from './DogDetailsWrapper';
// import dogs from './Data';
import daisy from "./images/daisy.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";




class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Daisy",
        age: 2,
        src: daisy,
        facts: [
          "Daisy is our newest love.",
          "Daisy is a terrible guard dog.",
          "Daisy wants to cuddle with you!",
          "Daisy just wanted a home and now she has that plus love",
        ],
      },
      {
        name: "Hazel",
        age: 6,
        src: hazel,

        facts: [
          "Hazel had soooo much energy!",
          "Hazel wanted love and her big sis, Maci.",
          "Hazel loved us more than anything but she would have still gone home with a stranger any day",
          "Hazel loved eating food slightly more than Maci did",
        ],
      },
      {
        name: "Tubby",
        age: 7,
        src: tubby,
        facts: [
          "Tubby was the smartest dog",
          "Tubby did not like walks or exercise.",
          "Tubby preferred to watch over the situations",
          "Tubby loved eating food.",
        ],
      },
    ],
  };

  
  
  render() {

    const { dogs } = this.props

    

    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/dogs" element={<DogList dogs={dogs} />}></Route>
          <Route exact path="/dogs/:name" element={<DogDetailsWrapper dogs={dogs} />}></Route>
          <Route path="/*" element={<h1>Not Found</h1>}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;

