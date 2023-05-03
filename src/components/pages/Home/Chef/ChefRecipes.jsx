import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipe from './Recipe';


const ChefRecipes = () => {
    const { id } = useParams();
    const [recipes, setRecipes] = useState([]);
    console.log(recipes)
    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.log(error.message))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 m-4 mx-12'>
                {
                    recipes.map(recipe => <Recipe key={recipe._id} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default ChefRecipes;