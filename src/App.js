import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
function App() {
  return (
    <div className="app">
      <Header />
      {/* app body */}
      <div className="app__body">
        
        <Sidebar />
          {/* Feed */}
          {/* widget */}

      </div>
          
    </div>
  );
}

export default App;
