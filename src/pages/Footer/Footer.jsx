// import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import logo from '../../assets/locomotive.png'

import { SiMinutemailer } from "react-icons/si";
import { AiFillSkype, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="w-11/12 mx-auto rounded footer p-10 bg-[#2196f3] text-neutral-content">
            <section className="grid grid-cols-1 sm:grid-cols-4 mx-auto gap-8 py-8">
                <div>
                    <div className='flex items-center gap-5'>
                        <img className="w-10 md:w-15" src={logo} alt="" />
                        <h1 className='text-xl font-bold'>SPORTS TOY ZONE</h1>
                    </div>
                    <p className="text-white mt-4 text-xl">About Us</p>
                    <p className="text-white mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium placeat, dignissimos quo provident vel laudantium, officia cupiditate suscipit repellat consectetur dolorem nam.</p>
                </div>
                <div className="text-white">
                    <h1 className="text-2xl">Contact</h1>
                    <ul className="list-none text-[#ffffff] py-2 space-y-2">
                        <li>mirzamohibul618@gmail.com</li>
                        <li>+880 1991347811</li>
                        <div className='flex gap-2'>
                            <Link to='https://web.facebook.com/?_rdc=2&_rdr'><BsFacebook className='text-2xl hover:text-gray-400'></BsFacebook></Link>
                            <Link to='https://twitter.com/home'><AiFillTwitterCircle className='text-2xl hover:text-gray-400'></AiFillTwitterCircle ></Link>
                            <Link to='https://www.instagram.com/?hl=en'><BsInstagram className='text-2xl hover:text-gray-400'></BsInstagram></Link>
                            <Link to='https://www.skype.com/en/'><AiFillSkype className='text-2xl hover:text-gray-400'></AiFillSkype></Link>
                        </div>
                    </ul>
                </div>
                <div className="text-white">
                    <h1 className="text-2xl mb-3">Our Address</h1>
                    <p className="text-[#ffffff]">Paramanandapur, Faridpur <br />Dhaka, abngladesh</p>
                    <p className="text-[#ffffff] my-3">Jessore-7808, Jashore <br />Khulna, abngladesh</p>
                </div>
                <div className="text-white">
                    <h1 className="text-2xl">Subscribe</h1>
                    <p className="text-[#ffffff] py-5">Subscribe for our latest & Articles. We Won’t Give You Spam Mails</p>

                    <form>
                        <div className="bg-white flex justify-between rounded-xl">
                            <input type="text" className="border-none flex-1 rounded-lg p-3" placeholder="Email Address" />
                            <button className="border-2 w-12 rounded-lg"><SiMinutemailer className='text-blue-700 w-full text-3xl'></SiMinutemailer></button>
                        </div>

                    </form>

                </div>
            </section>
        </footer>
    );
};

export default Footer;