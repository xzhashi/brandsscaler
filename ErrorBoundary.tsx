import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallbackMessage?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): Pick<State, 'hasError' | 'error'> {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      const errorMessage = this.props.fallbackMessage || "Sorry, something went wrong. Please try refreshing the page.";
      const detailedErrorMessage = this.state.error?.message || "An unknown error occurred.";
      const errorStack = this.state.error?.stack;
      const componentStack = this.state.errorInfo?.componentStack;

      return (
        <div style={{ margin: '20px auto', padding: '20px', maxWidth: '800px', border: '1px solid #dc3545', borderRadius: '8px', backgroundColor: '#f8d7da', color: '#721c24', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
          <h1 style={{ fontSize: '1.75em', marginBottom: '15px' }}>Application Error</h1>
          <p style={{ marginBottom: '10px' }}>{errorMessage}</p>
          
          {detailedErrorMessage && (
            <div style={{ marginTop: '15px', padding: '10px', background: '#f1f1f1', borderRadius: '4px', border: '1px solid #ddd' }}>
              <p style={{ fontSize: '0.9em', fontWeight: 'bold', color: '#555' }}>Error Details:</p>
              <p style={{ fontSize: '0.85em', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{detailedErrorMessage}</p>
            </div>
          )}

          {errorStack && (
            <details style={{ marginTop: '15px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#007bff' }}>View Error Stack</summary>
              <pre style={{ fontSize: '0.75em', textAlign: 'left', background: '#fdfdfd', border: '1px solid #eee', padding: '10px', borderRadius: '5px', overflowX: 'auto', marginTop: '5px', whiteSpace: 'pre-wrap', wordWrap: 'break-word', color: '#333' }}>
                {errorStack}
              </pre>
            </details>
          )}

          {componentStack && (
             <details style={{ marginTop: '10px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#007bff' }}>View Component Stack</summary>
              <pre style={{ fontSize: '0.75em', textAlign: 'left', background: '#fdfdfd', border: '1px solid #eee', padding: '10px', borderRadius: '5px', overflowX: 'auto', marginTop: '5px', whiteSpace: 'pre-wrap', wordWrap: 'break-word', color: '#333' }}>
                {componentStack}
              </pre>
            </details>
          )}

          <button
            onClick={() => {
              this.setState({ hasError: false, error: null, errorInfo: null }); // Attempt to recover by resetting error state
              // Consider if a full reload is safer: window.location.reload();
            }}
            style={{ marginTop: '20px', padding: '10px 20px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1em', marginRight: '10px' }}
          >
            Try to Recover
          </button>
           <button
             onClick={() => window.location.reload()}
             style={{ marginTop: '20px', padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1em' }}
           >
             Refresh Page
           </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
