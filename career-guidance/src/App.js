import React from 'react';
import Header from './components/header';
import Navbar from './components/Navbar';
import AppRoutes from './routes';

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;