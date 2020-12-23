import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPageContainer from '../collection/collection-page.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import './shop.style.scss';


const Shop = ({ fetchCollections, match }) => {

    useEffect(() => {
        fetchCollections();
    }, [fetchCollections]);

    return (
        <div className="shop">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollections: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop);