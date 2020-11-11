import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import { PreviewCollection } from '../../components/preview-collection/preview-collection.component';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {
                collections.map(item => (
                    <PreviewCollection key={item.id} {...item}></PreviewCollection>
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);