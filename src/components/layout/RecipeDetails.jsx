import React from 'react';
import Navbar from '../pages/Navbar/Navbar';
import ChefRecipes from '../pages/Home/Chef/ChefRecipes';
import Footer from '../shared/Footer/Footer';
import { useNavigation } from 'react-router-dom';


const RecipeDetails = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            <div>{navigation.state === 'loading' && 'Loading'}</div>
            <ChefRecipes></ChefRecipes>
            <Footer></Footer>
        </div>
    );
};

export default RecipeDetails;