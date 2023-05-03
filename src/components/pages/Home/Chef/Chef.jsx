import React from 'react';

const Chef = ({ chef }) => {
    console.log(chef)
    const {picture, name, yearsOfExperience, numRecipes, likes } = chef;
    return (
        <div className='mx-auto'>
            <div className="card w-96 bg-gray-300 shadow-xl my-2">
                <figure className="px-10 pt-10">
                    <img src={picture} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Chef-Name: {name}</h2>
                    <p>Years of Experience: {yearsOfExperience}</p>
                    <p>Number of Recipes: {numRecipes}</p>
                    <p>Likes: {likes}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;