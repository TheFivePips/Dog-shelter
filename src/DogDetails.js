import React from "react"

const DogDetails = ({ dog }) => {

    return(
        <div>

            <h1>{dog.name}</h1>
            <h1>{dog.age}</h1>
            <h1>{dog.facts}</h1>
        </div>
    )
}

export default DogDetails