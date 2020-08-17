import React from 'react';

import './homepage.style.scss';

import Categories from '../../components/categories/categories.component';

const HomePage = (props) => {
    return (
        <div className="homepage">
            <Categories></Categories>
        </div>
    )
}

export default HomePage;