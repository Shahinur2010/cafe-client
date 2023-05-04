import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe, chef }) => {
    const { cookingMethod, ingredients, recipeName, recipeImg, rating } = recipe;
    // const {picture, name, yearsOfExperience, numRecipes, likes } = chef;

    const [favourite, setFavourite] = useState(true);
    const notify = () => {
            toast("The recipe is your favourite !")
            setFavourite(false);
    };

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={recipeImg} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Recipe Name: {recipeName}</h2>
                    <p>Ingredients:
                        <li>{ingredients[0]}</li>
                        <li>{ingredients[1]}</li>
                        <li>{ingredients[2]}</li>
                        <li>{ingredients[3]}</li>
                        <li>{ingredients[4]}</li>
                    </p>
                    <p>Cooking Method: {cookingMethod}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <button onClick={notify} disabled={!favourite} className="btn btn-primary">Favourite</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;