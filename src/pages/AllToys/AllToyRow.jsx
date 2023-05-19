// import React from 'react';

const AllToyRow = ({ toy, index}) => {
    const { category,
        price,
        quantity,
        sellerName,
        toyName } = toy || {};
    return (
        <>
            <tr>
                <td>{index++}</td>
                <td className="text-sm">
                    {sellerName}
                </td>
                <td className="text-sm">
                    {toyName}
                </td>
                
                <td className="text-sm">
                    {category + ' Toy'}
                </td>
                <td className="text-sm">
                    {'$' + price}
                </td>
                <td className="text-sm">
                    {quantity}
                </td>
                <td className="text-sm">
                    <button className='bg-[#2196f3] py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>View Details</button>
                </td>
            </tr>
        </>
    );
};

export default AllToyRow;