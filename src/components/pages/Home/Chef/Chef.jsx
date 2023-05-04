import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Recipe from './Recipe';

const Chef = ({ chef }) => {
    const {picture, name, yearsOfExperience, numRecipes, likes } = chef;

    return (
        <div className='mx-auto'>
            <div className="card w-96 bg-gray-300 shadow-xl my-2 mx-auto">
                <figure className="px-10 pt-10">
                    <img src={picture} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Chef-Name: {name}</h2>
                    <p>Years of Experience: {yearsOfExperience}</p>
                    <p>Number of Recipes: {numRecipes}</p>
                    <p>Likes: {likes}</p>
                    <div className="card-actions">
                        <Link to={`/recipe-details/${chef.id}`}><button className="btn btn-primary">View Recipes</button></Link>
                    </div>
                </div>
            </div>
            {/* <Recipe chef={chef}></Recipe> */}
        </div>
    );
};

export default Chef;