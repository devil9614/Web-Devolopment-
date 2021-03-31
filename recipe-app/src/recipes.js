import React from 'react'

const recipes = ({title,calories,image}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src = {image} alt = {title}></img>
        </div>
    )
}

export default recipes
