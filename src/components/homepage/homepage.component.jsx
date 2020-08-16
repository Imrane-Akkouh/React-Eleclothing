import React from 'react';

import './homepage.style.scss';

const HomePage = (props) => {
    return (
        <div className="homepage">
            <div className="categories" >
                <div className="category-item">
                    <div className="category-content">
                        <h1 className="title">Hats</h1>
                        <span className="subtitle">Buy Now</span>
                    </div>
                </div>
                <div className="category-item">
                    <div className="category-content">
                        <h1 className="title">Children</h1>
                        <span className="subtitle">Buy Now</span>
                    </div>
                </div>
                <div className="category-item">
                    <div className="category-content">
                        <h1 className="title">Pants</h1>
                        <span className="subtitle">Buy Now</span>
                    </div>
                </div>
                <div className="category-item">
                    <div className="category-content">
                        <h1 className="title">Vests</h1>
                        <span className="subtitle">Buy Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;