import React from "react";

import { ErrorImageContainer, ErrorImageText, ErrorImageOverlay, HomePageLink } from "./error-boundary.styles";
import downloadedImage from '../../assets/error-image.png';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer image={downloadedImage} />
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                    <HomePageLink href="/">Go To Home Page</HomePageLink>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;