import React from 'react';
import { useParams } from 'react-router-dom'
import DogDetails from './DogDetails';
// import dogs from './Data';

const DogDetailsWrapper = ({ dogs }) => {
    const {name} = useParams()
    // const {dogs} = this.props

    const currentDog = dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
    )
    
    return <DogDetails dog={currentDog} />
}

export default DogDetailsWrapper;

