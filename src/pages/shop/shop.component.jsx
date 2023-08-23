import React from "react";
import { useParams } from "react-router-dom";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component"
// import Shop_Data from "./shop.data.js";
// import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
// import { selectCollections } from "../../redux/shop/shop.selectors.js";


// class ShopPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             collections: Shop_Data
//         }
//     }
//     render() {
//         const { collections } = this.state;
//         return (
//             <div className="shop-page">
//                 {collections.map(({ id, ...otherCollectionProps }) => (
//                     <CollectionPreview key={id} {...otherCollectionProps} />
//                 ))}
//             </div>
//         )
//     }
// }

const ShopPage = () => {
    // const location = useLocation().pathname;
    // if (location === '/shop') {
    //     return < CollectionsOverview />
    // }
    const params = useParams();
    // if (match) {
    //     return <div className="shop-page">
    //         < CollectionsOverview />
    //     </div>
    // }
    // return (
    //     < div className="shop-page" >
    //         {/* {collections.map(({ id, ...otherCollectionProps }) => (
    //             <CollectionPreview key={id} {...otherCollectionProps} />
    //         ))} */}
    //         <Route path=":categoryId" />
    //     </div >
    // )
    // return (
    //     <div className="shop-page">
    //         <Routes>
    //             <Route exact path="/" element={<CollectionsOverview />} />
    //             <Route exact path=":collectionId" element={<CollectionPage />} />
    //         </Routes>
    //     </div>
    // )

    return (
        <div className="shop-page">
            {
                params.collectionId ? <CollectionPage collectionId={params.collectionId} /> : <CollectionsOverview />
            }
        </div>
    )
}

// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// })

// export default connect(mapStateToProps)(ShopPage);
export default ShopPage;