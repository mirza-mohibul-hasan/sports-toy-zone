import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddAToy = () => {
    const { user } = useContext(AuthContext)
    const { email, displayName } = user || '';
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.price = parseFloat(data.price)
        data.sellerEmail = email;
        data.sellerName = displayName;
        fetch('http://localhost:5000/addatoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast.success('Toys added successfully', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    reset();
                }
            })
    };
    return (
        <div className="flex justify-center items-center md:my-10">
            <ToastContainer />
            <div className="card w-1/2 mx-auto bg-[#2195f337] shadow-xl">
                <h2 className='text-2xl font-bold text-center text-gray-700 mt-5'>Add new toys</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                        <input type="text" {...register("toyImg")} placeholder="Photo URL" className='bg-gray-100 px-5 py-2 rounded' />
                        <input type="text" {...register("toyName")} placeholder="Toy Name" className='bg-gray-100 px-5 py-2 rounded' />
                        <input type="text" defaultValue={displayName} {...register("sellerName")} placeholder="Seller Name" className='bg-gray-100 px-5 py-2 rounded' />
                        <input type="email" defaultValue={email} {...register("sellerEmail")} placeholder="Seller Email" className='bg-gray-100 px-5 py-2 rounded' />
                        <select className="text-input bg-gray-100 px-5 py-2 rounded" {...register("category")}>
                            <option value="Football">Football Toy</option>
                            <option value="Cricket">Cricket Toy</option>
                            <option value="Boxing">Boxing Toy</option>
                        </select>
                        <input type="text" {...register("price")} placeholder="Price" className='bg-gray-100 px-5 py-2 rounded' />
                        <input type="text" {...register("rating")} placeholder="Ratings" className='bg-gray-100 px-5 py-2 rounded' />
                        <input type="text" {...register("quantity")} placeholder="Available Quantity" className='bg-gray-100 px-5 py-2 rounded' />
                        <input type="text" {...register("description")} placeholder="Description" className='bg-gray-100 px-5 py-2 rounded' />
                        <input type="submit" className='bg-[#2196f3] text-white font-semibold rounded py-1' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;