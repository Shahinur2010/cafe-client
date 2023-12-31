import React, { useEffect, useState } from 'react';
import Chef from './Chef/Chef';
import { useParams } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import Marquee from "react-fast-marquee";

const Home = () => {
    const { id } = useParams();
    const [chefs, setChefs] = useState([]);
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <div>
            <Marquee>
                Please come to our restaurant to enjoy with delicious foods......   With your family and friends...... 
            </Marquee>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <div className='h-3/4 w-full p-2 absolute'>
                <img className='h-96 w-full' src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?w=740&t=st=1683099199~exp=1683099799~hmac=db8ab761831f9fc5b9142e7a4e22b47d3b9edfabb6eeb5ca3d55e6dc7b772a17" alt="" /></div>
            <div className='grid grid-cols-1 md:grid-cols-2 my-4 p-6 relative'>
                <div className='p-8 m-2 text-white'>
                    <h2 className='font-semibold text-3xl text-center p-2 my-2'>Welcome To Fodige Cafe</h2>
                    <p className='font-medium text-lg'>You are cordially invited to the most famous Japanese cuisine encompasses the regional and traditional foods of Japan.</p>
                </div>
                <div>
                    <img className='w-96 h-auto mx-auto' src=" https://media.gettyimages.com/id/1388496922/photo/portrait-of-bakery-woman.jpg?s=1024x1024&w=gi&k=20&c=giCxcwmBgXkQ6A5YAzOeGgXjpInRZ3lXjilTdFAGnKo=" alt="" />
                </div>
            </div>
            <div>
                <h2 className='text-3xl font-bold text-center mt-20 p-5'>Remarkable Chefs of Japan</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {
                        chefs.map(chef =>
                            <div>
                                <Chef key={chef.id} chef={chef}></Chef>
                                {/* <Recipe chef={chef}></Recipe> */}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;