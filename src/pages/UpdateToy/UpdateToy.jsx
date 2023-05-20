import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";
const UpdateToy = () => {
    const toy = useLoaderData();
    const {register, handleSubmit} = useForm();
    const {
        description,
        price,
        quantity,
        _id
    } = toy || {};
    const onSubmit = data => {
        data.price = parseFloat(data.price)
        // console.log(data)
        fetch(`https://b7a11-toy-marketplace-server-side-mirza-mohibul-hasan.vercel.app/updatetoy/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.modifiedCount){
                toast.success('TOY UPDTATE SUCCESSFULL', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        })
    };
    useTitle('Update Toy')
    return (
        <div className="flex justify-center items-center md:my-10">
            <ToastContainer />
            <div className="card w-1/2 mx-auto bg-[#2195f337] shadow-xl">
                <h2 className='text-2xl font-bold text-center text-gray-700 mt-5'>Update Toy</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                        <label htmlFor="" className="text-lg font-semibold px-1 -mb-2">Price</label>
                        <input type="text" defaultValue={price} {...register("price")} placeholder="Price" className='bg-gray-100 px-5 py-2 rounded' />
                        <label htmlFor="" className="text-lg font-semibold px-1 -mb-2">Available Quantity</label>
                        <input type="text" defaultValue={quantity} {...register("quantity")} placeholder="Available Quantity" className='bg-gray-100 px-5 py-2 rounded' />
                        <label htmlFor="" className="text-lg font-semibold px-1 -mb-2">Description</label>
                        <textarea type="text" defaultValue={description} {...register("description")} placeholder="Description" className='bg-gray-100 px-5 py-2 rounded' ></textarea>
                        <input value="Update" type="submit" className='bg-[#2196f3] text-white font-semibold rounded py-1 hover:bg-gray-500' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;