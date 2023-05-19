import { useEffect, useState } from "react";
import AllToyRow from "./AllToyRow";

const AllToys = () => {
    const [alltoys, setAlltoys] = useState([])
    const [loadedtoys, setLoadedToys] = useState([])
    const [showmore, setShowMore] = useState(false);
    const url = `https://b7a11-toy-marketplace-server-side-mirza-mohibul-hasan.vercel.app/alltoys?showmore=${showmore}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoadedToys(data)
                setAlltoys(data)
            })
    }, [url, showmore])
    const handleShowMore = (show) => {
        setShowMore(show);
    };
    const handleSearch = (event) => {
        event.preventDefault();
        const search = event.target.search.value;
        const searchedToy = loadedtoys.filter(toy => toy.toyName.toLowerCase().includes(search.toLowerCase()))
        setAlltoys(searchedToy)
    }
    return (
        <div className="w-11/12 mx-auto">
            <form onSubmit={handleSearch} className="flex justify-center my-5">
                <input type="text" name="search" placeholder="Search" className='border-1 border-[#2196f3] bg-gray-100 px-5 py-2 rounded' />
                <input className="bg-[#2196f3] text-white py-2 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0" type="submit" value="Search" />
            </form>
            <div className="overflow-x-auto w-full">
                <table className="table w-full text-center">
                    <thead >
                        <tr>
                            <th>Serial</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="w-full border-b">
                        {
                            alltoys.map((toy, index) => <AllToyRow key={toy._id} toy={toy} index={index + 1}></AllToyRow>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center my-5">
                <button onClick={() => handleShowMore(true)} className={`${showmore == false && alltoys.length>=20? "bg-[#2196f3] text-white" : "hidden"} py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0`}>Show More</button>
                <button onClick={() => handleShowMore(false)} className={`${showmore == true ? "bg-[#f38e21] text-white" : "hidden"} py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0`}>Show Less</button>
            </div>
        </div>
    );
};

export default AllToys;