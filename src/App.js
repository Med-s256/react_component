import './App.css';
import React from 'react';
import ProfilPhoto from './component/profile/ProfilPhoto';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ProfilPhoto />
        </div>
        <div>
          <FullName />
          <Address />
        </div>
      </header>
    </div>
  );
}

export default App;
