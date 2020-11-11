import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategories } from '../../redux/category/category.selectors';

import CategoryItem from '../category-item/category-item.component';

import './categories.style.scss';

const Categories =({sections}) => {
    return (
        <div className="categories" >
            {sections.map(({ id, ...otherSectionProps }) => (
                <CategoryItem key={id} {...otherSectionProps}></CategoryItem>
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectCategories
})

export default connect(mapStateToProps)(Categories);