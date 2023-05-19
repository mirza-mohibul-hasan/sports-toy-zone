// import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
const Gallery = () => {
    const images = [
        "https://static-01.daraz.com.bd/p/64e2b794d097bfb6438cd2e60dd89d34.png",
        "https://static01.nyt.com/images/2020/07/21/autossell/sports-reboot-promo-still/sports-reboot-promo-still-videoLarge.jpg",
        "https://image.smythstoys.com/picture/desktop/197789.jpg",
        "https://s7.orientaltrading.com/is/image/OrientalTrading/noveltytoys-toyassortments-020922-1x1?$1x1main$&$NOWA$",
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMHRveXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        "https://s7.orientaltrading.com/is/image/OrientalTrading/noveltytoys-toyassortments-020922-1x1?$1x1main$&$NOWA$",
        "https://static-01.daraz.com.bd/p/e549c4854c2949a98037c754a69ed809.jpg_720x720.jpg_.webp",
        "https://m.media-amazon.com/images/I/71ahylNURzL.jpg",
        "https://img.freepik.com/free-vector/sports-equipment-icons-set_1284-13032.jpg?w=360",
    ]
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-3xl font-bold text-center">Toy Gallery</h1>
            <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
            <Masonry>
                {images.map((image, i) => (
                    <img className="p-2 rounded-xl shadow-xl"
                        key={i}
                        src={image}
                        style={{ width: "100%", display: "block"}}
                        alt=""
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
        </div>
    );
};

export default Gallery;