import React from 'react';

import './collection-item.style.scss';

export const CollectionItem = ({ name, imageUrl, price }) => (
    <div className="collection-item">
        <div className="image" style={{ background: `url(${imageUrl})`, backgroundRepeat: 'no-repeat' }}></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
)
