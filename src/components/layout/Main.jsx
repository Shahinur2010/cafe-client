import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from '../pages/Navbar/Navbar';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            <div>{navigation.state === 'loading' && 'Loading'}</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;