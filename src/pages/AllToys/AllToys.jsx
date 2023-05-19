import { useEffect, useState } from "react";

const AllToys = () => {
    const [alltoys, setAlltoys] = useState([])
    const [showmore, setShowMore] = useState(false);
    const url = `http://localhost:5000/alltoys?showmore=${showmore}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [url, showmore])
    const handleShowMore = (show) => {
        setShowMore(show);
    };
    return (
        <div className="w-11/12 mx-auto">
            <div className="overflow-x-auto w-full">
                <table className="table w-full text-center">
                    <thead >
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center my-5">
                <button onClick={() => handleShowMore(true)} className={`${showmore == false ? "bg-[#2196f3] text-white" : "hidden"} py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0`}>Show More</button>
                <button onClick={() => handleShowMore(false)} className={`${showmore == true ? "bg-[#f38e21] text-white" : "hidden"} py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0`}>Show Less</button>
            </div>
        </div>
    );
};

export default AllToys;