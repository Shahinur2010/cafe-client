import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipe from './Recipe';

const ChefRecipes = () => {
    const { id } = useParams();
    console.log(id)
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <div>
            {
                recipes.map(recipe=> <Recipe key={recipe.id}></Recipe>)
            }
        </div>
    );
};

export default ChefRecipes;