import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionPage from '../collection/collection-page.component';
import { firestore, convertCollectionsToMap } from '../../firebase/firebase.utils';
import { WithSpinner } from '../../components/with-spinner/with-spinner.component';

import { getCollections } from '../../redux/shop/shop.actions';

import './shop.style.scss';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

class Shop extends React.Component {
    state = {
        isLoading: true
    }


    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { getCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot)=>{
            const collectionsMap = convertCollectionsToMap(snapshot);
            getCollections(collectionsMap);
            this.setState({isLoading: false});
        })
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;
        const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
        const CollectionPageWithSpinner = WithSpinner(CollectionPage);
        return (
            <div className="shop">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}></CollectionsOverviewWithSpinner>}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props}></CollectionPageWithSpinner>} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getCollections : collectionsMap => dispatch(getCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);