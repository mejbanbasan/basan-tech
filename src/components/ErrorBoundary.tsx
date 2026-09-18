import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Component rendering error caught by ErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center space-y-4 bg-white">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#00976C] flex items-center justify-center font-bold text-lg border border-emerald-200">
            !
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#022A4E]">
            Unable to display this section
          </h2>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            A temporary display error occurred. Please return to the homepage or try reloading the page.
          </p>
          <a 
            href="/" 
            className="px-6 py-2.5 rounded-full bg-[#022A4E] hover:bg-[#00976C] text-white text-xs font-bold transition-colors shadow-xs"
          >
            Back to Homepage
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}
