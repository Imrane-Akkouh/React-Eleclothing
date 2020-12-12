import React from 'react';

import { HomepageContainer } from './homepage.style';

import Categories from '../../components/categories/categories.component';

const HomePage = (props) => {
    return (
        <HomepageContainer>
            <Categories></Categories>
        </HomepageContainer>
    )
}

export default HomePage;