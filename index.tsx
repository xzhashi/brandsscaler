import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './ErrorBoundary'; // Import the new ErrorBoundary component

let appHasMounted = false; // Guard to ensure app is mounted only once

function mountReactApp() {
  if (appHasMounted) {
    console.warn("mountReactApp called more than once. Skipping subsequent calls.");
    return;
  }

  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Fatal: Could not find root element #root to mount to.");
    document.body.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: sans-serif;">
        <h1>Application Initialization Error</h1>
        <p>The main application container (#root) could not be found in the page.</p>
        <p>Please ensure the HTML has a div with id="root".</p>
      </div>
    `;
    return;
  }

  if (!rootElement.isConnected) {
    console.error("Fatal: Root element #root was found but is not connected to the document.");
    document.body.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: sans-serif;">
        <h1>Application Initialization Error</h1>
        <p>The main application container (#root) was found but is not properly connected to the page.</p>
        <p>This is an unexpected issue. Please try refreshing or contact support.</p>
      </div>
    `;
    return;
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary fallbackMessage="The application encountered an unexpected issue. Please try refreshing.">
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
  
  appHasMounted = true; // Set the guard after successful root.render call setup
}

// Wait for the DOM to be fully loaded before initializing the React app
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountReactApp);
} else {
  // DOMContentLoaded has already fired
  mountReactApp();
}