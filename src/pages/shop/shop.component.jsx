import React from "react";
import { useParams } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
    const params = useParams();
    return (
        <div className="shop-page">
            {
                params.collectionId ? <CollectionPage collectionId={params.collectionId} /> : <CollectionsOverview />
            }
        </div>
    )
}

export default ShopPage;