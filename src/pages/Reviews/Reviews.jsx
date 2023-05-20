import Reviews from "./ReviewCard";
import Aos from "aos";
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
const ContactUs = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
    return (
        <section className="my-8 w-11/12 mx-auto">
            <h1 className="font-semibold text-3xl text-center">Customer Reviews</h1>
            <p className=" text-center sm:w-[50%] mx-auto mt-4 mb-5">Here what our customer said about us Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit?</p>
            <div className='lg:flex gap-5'>
                <div className="lg:w-2/3  grid grid-cols-1 lg:grid-cols-3 gap-5" data-aos="fade-up">
                    {/* <h1>Customers Review</h1> */}
                    <Reviews></Reviews>
                </div>
                <div className="p-5 mt-5 lg:mt-0 lg:p-20 rounded lg:w-1/3  bg-[#5e9bcc98]" data-aos="zoom-out-left">
                    <h1 className="text-2xl text-center lg:-mt-7 mb-5 text-white font bold">Contact Us</h1>
                    <input type="text" name="" id="" placeholder="Your name"
                        className="w-full p-3  border-none bg-[#F3F3F3] rounded-lg mb-4" /> <br />
                    <input type="email" name="" id="" placeholder="Your Email"
                        className="w-full p-3  border-none bg-[#F3F3F3] rounded-lg mb-4" /><br />
                    <input type="text" name="" id="" placeholder="Subject"
                        className="w-full p-3  border-none bg-[#F3F3F3] rounded-lg mb-4" /> <br />
                    <textarea name="" id="" cols="10" rows="5" placeholder="Your Message"
                        className="w-full border-none bg-[#F3F3F3] rounded-lg mb-4 p-3"></textarea>
                    <input type="submit" value="Send Message" className="bg-[#2196f3] w-full py-3 text-white rounded-lg hover:bg-gray-600" />
                </div>
            </div>
        </section >
    );
};

export default ContactUs;