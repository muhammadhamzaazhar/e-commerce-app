import React from "react";

import Spinner from "../spinner/spinner.component";

const WithSpinner = WrappedComponent => {
    const CustomSpinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <Spinner />
        ) : (
            <WrappedComponent {...otherProps} />
        )
    }
    return CustomSpinner
}

export default WithSpinner;