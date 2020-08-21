import React from 'react';
import { withRouter } from 'react-router-dom';

import './category-item.style.scss';

const CategoryItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <div className={`${size} category-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(CategoryItem);