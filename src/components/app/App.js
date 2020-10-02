import React from 'react';
import ErrorHandler from './ErrorHandler';
import MasterLayout from '../layout/MasterLayout';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <ErrorHandler>
        <MasterLayout />
      </ErrorHandler>
    </Router>
  );
}
