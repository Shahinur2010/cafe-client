import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import ActiveLink from '../Home/ActiveLink/ActiveLink';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    return (
        <div className="navbar bg-gray-300 p-4 flex flex-col lg:flex-row">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl font-bold">Japanese Fodige-Cafe</a>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 text-lg font-semibold">
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user && <img src="https://media.istockphoto.com/id/1144614890/photo/portrait-of-a-japanese-sushi-chef.jpg?s=1024x1024&w=is&k=20&c=o4mKQr4wyYuDo9k36xQwki3rHh0FzjVDGO31edvLshA=" />}
                        </div>
                    </label>
                    {user ? <><span className='me-2'>{user.displayName}</span>
                        <button onClick={handleLogOut} className="btn btn-xs">Sign Out</button></> : <ActiveLink to='/login'>Login</ActiveLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;