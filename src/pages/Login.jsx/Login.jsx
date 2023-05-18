import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from 'react-icons/fa';
const Login = () => {
    const { handleGoogleSignIn, signIn } = useContext(AuthContext);
    const [errormsg, setErrormsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    //Google Login
    const googleSignin = () => {
        handleGoogleSignIn()
            .then(result => {
                // successToast('Login Successfull')
                console.log(result)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setErrormsg(error.message)
            })
    }
    // Email Password Login
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                setErrormsg('')
                // successToast('Login Successfull')
                console.log(result)
                navigate(from, { replace: true })
            })
            .catch(error => {
                if ((error.message).includes('wrong-password')) {
                    setErrormsg('Wrong Password')
                }
                else if ((error.message).includes('user-not-found')) {
                    setErrormsg("You don't have an account")
                }
                else if ((error.message).includes('too-many-requests')) {
                    setErrormsg("Account blocked, try later")
                }
                else {
                    setErrormsg(error.message)
                }
            })
    }
    return (
        <div className='flex justify-center items-center md:my-20' style={{}}>
            <div className='p-5 m-5 md:w-3/12 rounded-2xl space-y-8 bg-[#2195f337]' style={{ border: '2px solid #2195f331' }}>
                {
                    (errormsg.length > 2) && <p style={{ border: '1px solid red' }} className='text-center text-red-500 text-sm my-1 font-semibold rounded-md'>{errormsg}</p>
                }
                <h2 className='text-2xl font-bold text-center text-gray-700 mb-3 mt-2'>Login Here</h2>
                <div className='flex justify-around mt-2'>
                    <button onClick={googleSignin} className='border p-2 rounded  hover:bg-[#0f3452] flex items-center justify-center gap-1 bg-[#2196f3] w-full'>
                        <FaGoogle className='text-white text-center'></FaGoogle>
                        {/* <img src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" /> */}
                        <span className='font-semibold text-white'>Google</span>
                    </button>
                </div>
                <form onSubmit={handleLogin} className='flex flex-col gap-3'>
                    <input type="email" name="email" id="email" required placeholder='Email address' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="password" name="password" id="password" required placeholder='Your password' className='bg-gray-100 px-5 py-2 rounded' />

                    <input type="submit" value="Login" className='bg-[#2196f3] hover:bg-[#0f3452] text-white font-semibold rounded py-1' />
                </form>
                <h4 className='my-3 text-sm text-gray-500 font-semibold text-center'>Not have an account? <Link to='/register' className='text-[#0982e4] hover:text-[#0f3452]'>Register</Link></h4>
            </div>
        </div>
    );
};

export default Login;