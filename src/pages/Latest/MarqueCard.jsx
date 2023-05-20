import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const MarqueCard = ({ toy }) => {
    const { user } = useContext(AuthContext)
    const detailsBtnToast = () => {
        if (!user) {
            toast.success('Login To View Details', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <div className="card w-80 bg-base-100 shadow-xl mx-3 border-2">
            <figure className="h-64 px-10 pt-10 rounded">
                <img className="w-full h-64 rounded " src={toy.toyImg} alt="Toy" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">
                    {toy.toyName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className="flex">
                    <p className="text-lg">Price: ${toy.price}</p>
                    <p className="flex items-center text-lg">Ratings: {toy.rating} <AiFillStar></AiFillStar></p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/toy/${toy._id}`} >
                        <button onClick={detailsBtnToast} className="bg-[#2196f3] py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MarqueCard;