import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Result } from 'postcss';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState()
    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photo = form.photo.value;
        console.log(email, password, confirm, photo, name);
        setError('');
        if (password !== confirm) {
            setError('Your password did not match')
            return
        }
        else if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div className="flex">
            <div className="w-1/2 p-8 bg-red-400 flex flex-col justify-center items-center shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 text-gray-700">Please Sign Up</h2>
                <form onSubmit={handleSignUp} className="w-full max-w-sm">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600 font-medium mb-1">Username</label>
                        <input type="text" name="name" id="username" className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-gray-600 block font-medium mb-1">Email</label>
                        <input type="email" name='email' id="email" className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="text-gray-600 block font-medium mb-1">Password</label>
                        <input type="password" name='password' id="password" className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="text-gray-600 block font-medium mb-1">Confirm Password</label>
                        <input type="password" name='confirm' id="confirm" className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="text" className="text-gray-600 block font-medium mb-1">Photo URL</label>
                        <input type="text" name='photo' id="photo" className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <button type="submit" className="w-full bg-red-500 text-white py-2 rounded hover:bg-gradient-to-r from-blue-500 to-cyan-500 transition duration-300">Sign Up</button>
                    <h2 className='text-center font-semibold'>Have an Account? <Link to='/login' className=' my-2 text-red-600'>Please Login</Link></h2>

                    <p className='text-red-600'>{error}</p>
                </form>
            </div>
            <div>
                <img src="https://img.freepik.com/free-vector/add-user-concept-illustration_114360-557.jpg?w=740&t=st=1692118213~exp=1692118813~hmac=e112c1ebc2913f003ce060b2ef78a5f2f671aef40a74fb983710e2dfaf04ee84" alt="" />
            </div>
        </div>
    );
}

export default Register;
