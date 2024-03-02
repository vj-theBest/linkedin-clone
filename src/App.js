import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
function App() {
  return (
    <div className="app">
      <Header />
      {/* app body */}
      <div className="app__body">
        
        <Sidebar />
        <Feed />
        <Widgets/>

      </div>
          
    </div>
  );
}

export default App;
