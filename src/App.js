import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './routers/Router';
import './App.css';

function App() {
  return (
 
    <div className="app-container">
  <Header />
  <div style={{ flex: 1 }}>
    <Router />
  </div>
  <Footer />
</div>

  );
}

export default App;





