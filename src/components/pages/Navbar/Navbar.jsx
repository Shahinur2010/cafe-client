import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    return (
        <div className="navbar bg-purple-300 p-4 flex flex-col lg:flex-row">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl font-bold">Japanese Fodige-Cafe</a>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 text-lg font-semibold">
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user && <img src="" />}
                        </div>
                    </label>
                    {user ? <><span>{user.email}</span>
                        <button onClick={handleLogOut} className="btn btn-xs">Sign Out</button></> : <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;