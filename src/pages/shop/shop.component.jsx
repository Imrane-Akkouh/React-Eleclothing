import React, { Component } from 'react';

import './shop.style.scss';
import SHOP_DATA from './shop.data.js';
import { PreviewCollection } from '../../components/preview-collection/preview-collection.component';

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    };
    render() {
        const {collections} = this.state;
        return (
            <div className="shop">
                {
                    collections.map(item => (
                <PreviewCollection key="item.id" {...item}></PreviewCollection>
                ))
            }
            </div>
        )
    }
}

export default Shop;