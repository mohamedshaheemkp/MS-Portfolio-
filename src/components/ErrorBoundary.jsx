import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("React Error Boundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: '#222', color: '#ff5555', minHeight: '100vh', fontFamily: 'monospace' }}>
          <h1 style={{ color: 'white', marginBottom: '20px' }}>⚠️ App Crashed (Runtime Error)</h1>
          <p>Please copy this error message and send it to me so I can fix it instantly:</p>
          <div style={{ background: '#000', padding: '20px', borderRadius: '8px', marginTop: '20px', overflowX: 'auto' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>{this.state.error && this.state.error.toString()}</h3>
            <pre style={{ margin: 0, color: '#aaa', fontSize: '12px' }}>
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
