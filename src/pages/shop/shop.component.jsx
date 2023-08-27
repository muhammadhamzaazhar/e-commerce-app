import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPageWithParams extends React.Component {
    state = {
        loading: true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false })
        })
    }

    render() {
        const { collectionId } = this.props.params;
        const { loading } = this.state
        return (
            <div className="shop-page">
                {
                    collectionId ? <CollectionsPageWithSpinner isLoading={loading} collectionId={collectionId} /> : <CollectionsOverviewWithSpinner isLoading={loading} />
                }
            </div>
        )
    }
}

const ShopPage = ({ updateCollections }) => {
    const params = useParams();
    return <ShopPageWithParams params={params} updateCollections={updateCollections} />;
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);