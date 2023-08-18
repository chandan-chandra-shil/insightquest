import React, { useContext } from 'react';

import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { signIn,setUser } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
            })
    }

    return (
        <div>
            <div className='bg-gradient-to-r from-cyan-300 to-gray-400'>
                <div className='flex gap-5 items-center justify-center'>
                    <div className='w-full'>
                        <img src="https://i.ibb.co/LSLfkBM/8135213-3830124-1-removebg-preview.png" alt="" />
                    </div>
                    <div className='w-full p-5'>
                        <div className='gap-2 items-center text-center'>
                            <div>
                                <h2 className='text-3xl font-semibold text-gray-800'>Sign in with </h2>
                            </div>
                            <div className='flex justify-center my-2 gap-1'>
                                <button className='bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-xl h-8 w-8 '><FaFacebookF
                                    className='mx-auto text-xl text-white'></FaFacebookF></button>
                                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-4xl h-8 w-8'><FaGoogle className='mx-auto text-xl text-white'></FaGoogle></button>
                                <button className='bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-xl h-8 w-8'><FaTwitter className=' mx-auto text-xl text-white'></FaTwitter></button>

                            </div>
                        </div>
                        <div className="mt-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                Or
                            </p>
                        </div>
                        <form onSubmit={handleLogin} className=''>
                            <h2 className='my-2 text-center text-xl font-semibold text-gray-900'>Please Login</h2>
                            <div className='my-2'>
                                <input className='bg-gray-100 rounded-e-lg border h-10 w-full' type="email" name="email" id="" placeholder='Email address' required />
                            </div>
                            <div className=''>
                                <input className='bg-gray-100 rounded-e-lg h-10 w-full' type="password" name="password" id="" placeholder='Password' required />
                            </div>
                            <div className='mx-auto text-center my-10'>
                                <button type="submit" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto text-center">Login</button>
                            </div>
                        </form>

                        <h2 className='text-center font-semibold'>Don't have an Account? <Link to='/register' className='text-red-600'>Register</Link></h2>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;