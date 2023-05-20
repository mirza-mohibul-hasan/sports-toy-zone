// import React from 'react';

const Banner = () => {
    return (
        <div className="mt-4 w-11/12 mx-auto mb-5 rounded-xl hero min-h-screen" style={{ backgroundImage: `url("https://i0.wp.com/kiddiland.in/wp-content/uploads/2022/10/banner-01.jpg?fit=800%2C374&ssl=1")` }}>
            <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;