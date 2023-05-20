import { Link } from "react-router-dom";
const ToyRow = ({ mytoy, handleDelete }) => {
    const { category,
        description,
        price,
        quantity,
        rating,
        sellerEmail,
        sellerName,
        toyImg,
        toyName,
        _id } = mytoy || {};
    return (
        <>
            <tr className="border-2">
                <td className="flex justify-center">
                    <img className="w-8 h-8  rounded-3xl" src={toyImg} alt="" />
                </td>
                <td className="text-sm">
                    {toyName}
                </td>
                <td className="text-sm">
                    {sellerName}
                </td>
                <td className="text-sm">
                    {sellerEmail}
                </td>
                <td className="text-sm">
                    {category + ' Toy'}
                </td>
                <td className="text-sm">
                    {'$' + price}
                </td>
                <td className="text-sm">
                    {rating}
                </td>
                <td className="text-sm">
                    {quantity}
                </td>
                <td className="text-sm">
                    {
                        `${description.length > 30 ? description.slice(0, 30) + '....' : description}`
                    }
                </td>
                <td className="text-sm">
                    <Link to={`/updatetoy/${_id}`}>
                        <button className='bg-[#2196f3] py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>Update</button></Link>
                    <button onClick={()=>handleDelete(_id)} className='bg-[#f32121] py-1 px-2 mx-1 rounded hover:bg-[#f0d7d7] hover:text-[#ff0000] font-semibold md:my-0 text-white'>Delete</button>
                </td>
            </tr>
        </>
    );
};

export default ToyRow;