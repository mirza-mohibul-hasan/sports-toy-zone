// import React from 'react';

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const navigate = useNavigate();
    const { createUser, updateUserData, logOut } = useContext(AuthContext);
    const [errormsg, setErrormsg] = useState('');

    //Email Password Register
    const handleRegister = (event) => {
        event.preventDefault();
        setErrormsg('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        //Password Length Check
        if (password.length < 6) {
            setErrormsg('Password should be more than six characters')
            return;
        }
        // Register With Emaill pass function
        createUser(email, password)
            .then(result => {
                // successToast('Registration Successfull');
                console.log(result)
                event.target.reset();
                updateUserData(result.user, name, photo)
                // logOut(false)
                logOut()
                navigate('/login')
            })
            .catch(error => {
                if ((error.message).includes('email-already-in-use')) {
                    setErrormsg("Already Registered")
                }
                else {
                    setErrormsg(error.message)
                }
            })
    }
    return (
        // Register page
        <div className='flex justify-center items-center md:my-20'>
            <div className='p-5 m-5 md:w-3/12 rounded-2xl space-y-8 bg-[#2195f337]' style={{ border: '2px solid #2195f331' }}>
                {
                    (errormsg.length > 2) && <p style={{ border: '1px solid red' }} className='text-center text-amber-500 text-sm my-1 font-semibold rounded-md'>{errormsg}</p>
                }
                <h2 className='text-2xl font-bold text-center text-gray-700 mb-5'>Register here</h2>
                <form onSubmit={handleRegister} className='flex flex-col gap-3'>
                    <input type="email" name="email" id="email" required placeholder='Email Address' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="password" name="password" id="password" required placeholder='Password' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="text" name="name" id="name" placeholder='Name' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="text" name="photo" id="photourl" placeholder='Photo URL' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="submit" value="Sign Up" className='bg-[#2196f3] text-white font-semibold rounded py-1' />
                </form>
                <h4 className='my-3 text-sm text-gray-500 font-semibold text-center'>Already registered? <Link to='/login' className='text-[#0982e4]'>Log in</Link></h4>
            </div>
        </div>
    );
};

export default Register;