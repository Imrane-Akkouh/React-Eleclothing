import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import './shop.style.scss';
import Spinner from '../../components/spinner/spinner.component';


const Shop = ({ fetchCollections, match }) => {

    const CollectionPageContainer = lazy(() => import('../collection/collection-page.container'));
    const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));

    useEffect(() => {
        fetchCollections();
    }, [fetchCollections]);

    return (
        <div className="shop">
            <Suspense fallback={<Spinner></Spinner>}>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </Suspense>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollections: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop);