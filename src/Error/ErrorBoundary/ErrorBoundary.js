import React from "react";

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: null,
        errorInfo: null
    };

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error to an error reporting service
        console.log(error, errorInfo);
    }

    handleRetryClick = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
    };

    render() {
        const { fallback: FallbackComponent, children } = this.props;
        const { hasError, error, errorInfo } = this.state;

        if (hasError) {
            return FallbackComponent ? (
                <FallbackComponent error={error} errorInfo={errorInfo} onRetry={this.handleRetryClick} />
            ) : (
                <div className="error-fallback">
                    <h1 className="error-message">Something went wrong with this component!</h1>
                    <button className="retry-button" onClick={this.handleRetryClick}>
                        Try again
                    </button>
                </div>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
