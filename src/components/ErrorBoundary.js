import React from "react";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p> Opps Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback;