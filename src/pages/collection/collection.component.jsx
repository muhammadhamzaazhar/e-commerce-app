import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    // console.log(collection)
    // const params = useParams();
    // collectionId.id = params.collectionId;
    const { title, items } = collection;

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (<CollectionItem key={item.id} item={item} />))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({ //The first parameter we know is the state which is our overall reduce state from the top right.
    //The second argument is actually called own props which is the props of the component that we're wrapping in our connect()
    collection: selectCollection(ownProps.collectionId)(state) //this is necessary b/c unlike other selectors, this selector needs a part of the state depending on the URL parameter 
})

export default connect(mapStateToProps)(CollectionPage);