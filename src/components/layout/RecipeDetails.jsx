import React from 'react';
import Navbar from '../pages/Navbar/Navbar';
import ChefRecipes from '../pages/Home/Chef/ChefRecipes';
import Footer from '../shared/Footer/Footer';


const RecipeDetails = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ChefRecipes></ChefRecipes>
            <Footer></Footer>
        </div>
    );
};

export default RecipeDetails;