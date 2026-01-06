import React, { ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("React Error Boundary Caught:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: '#fff0f5', // Lavender Blush
            color: '#db7093', // Pale Violet Red
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"Quicksand", "Noto Sans SC", sans-serif',
            textAlign: 'center',
            padding: '2rem'
        }}>
          <h1 style={{fontSize: '3rem', marginBottom: '0.5rem'}}>qaq</h1>
          <h2 style={{fontSize: '1.5rem', marginBottom: '2rem', color: '#ffb7b2'}}>画面加载失败啦</h2>
          <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '1rem',
              maxWidth: '800px',
              textAlign: 'left',
              border: '2px dashed #ffb7b2',
              boxShadow: '0 4px 6px rgba(255, 182, 193, 0.3)'
          }}>
            <p style={{marginBottom: '0.5rem', fontWeight: 'bold'}}>错误小纸条:</p>
            <pre style={{whiteSpace: 'pre-wrap', fontSize: '0.9rem', color: '#888'}}>
                {this.state.error?.toString()}
            </pre>
          </div>
          <button 
            onClick={() => window.location.reload()}
            style={{
                marginTop: '2rem',
                padding: '0.8rem 2rem',
                backgroundColor: '#ffb7b2',
                color: 'white',
                border: 'none',
                borderRadius: '2rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            重新尝试 ✨
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

try {
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} catch (e) {
  console.error("Root Render Failed", e);
  throw e; 
}