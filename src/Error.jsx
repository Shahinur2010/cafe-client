import React from 'react';

const Error = () => {
    return (
        <div className='flex flex-col text-center justify-center items-center text-3xl font-semibold m-8'>
            <img src="https://media.istockphoto.com/id/1447116747/photo/the-plugin-is-out-of-contact-and-the-number-404-as-an-error-of-a-non-existent-website.jpg?s=612x612&w=is&k=20&c=3mXKz8v_zXta9FKSTexsDxSJzZjYPtLGakR2meFpLmg=" alt="" />
            <h1 className='text-6xl'>404</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
};

export default Error;