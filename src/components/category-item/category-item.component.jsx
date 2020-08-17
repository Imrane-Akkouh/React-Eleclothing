import React from 'react';

import './category-item.style.scss';

const CategoryItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} category-item`}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className="category-content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Buy Now</span>
            </div>
        </div>
    )
}

export default CategoryItem;