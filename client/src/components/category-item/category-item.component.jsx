import React from 'react';
import { withRouter } from 'react-router-dom';

import { CategoryItemContainer } from './category-item.style';

const CategoryItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <CategoryItemContainer large={ size ? true : false} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className="category-content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Buy Now</span>
            </div>
        </CategoryItemContainer>
    )
}

export default withRouter(CategoryItem);