
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function mountReactApp() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    // This error should ideally not be hit if DOMContentLoaded is working,
    // but it's a good fallback.
    console.error("Fatal: Could not find root element #root to mount to.");
    // Attempt to display an error message directly in the body if #root is missing
    document.body.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: sans-serif;">
        <h1>Application Initialization Error</h1>
        <p>The main application container (#root) could not be found in the page.</p>
        <p>Please ensure the HTML has a div with id="root".</p>
      </div>
    `;
    return;
  }

  // Ensure the root element is actually connected to the main document
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

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Error during React application rendering:", error);
    
    // Attempt to display the error message.
    // If rootElement is still valid, use it. Otherwise, fallback to document.body.
    const displayErrorContainer = document.getElementById('root') || document.body;
    
    let errorMessageHtml = `
      <div style="padding: 20px; text-align: center; font-family: sans-serif; color: #333;">
        <h1 style="color: #d9534f;">Application Error</h1>
        <p>Sorry, something went wrong while loading the application.</p>
        <p>Please try refreshing the page. If the problem persists, contact support.</p>
    `;

    if (error instanceof Error) {
      errorMessageHtml += `<p style="margin-top: 10px; font-size: 0.9em; color: #555;"><strong>Message:</strong> ${error.message}</p>`;
      if (error.stack) {
        errorMessageHtml += `
          <pre style="font-size: 0.8em; text-align: left; background: #f9f9f9; border: 1px solid #eee; padding: 10px; border-radius: 5px; overflow-x: auto; margin-top: 10px; white-space: pre-wrap; word-wrap: break-word;">
${error.stack}
          </pre>
        `;
      }
    } else {
      errorMessageHtml += `<p style="margin-top: 10px; font-size: 0.9em; color: #555;">An unknown error occurred.</p>`;
    }
    errorMessageHtml += `</div>`;
    
    displayErrorContainer.innerHTML = errorMessageHtml;
  }
}

// Wait for the DOM to be fully loaded before initializing the React app
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountReactApp);
} else {
  // DOMContentLoaded has already fired
  mountReactApp();
}
