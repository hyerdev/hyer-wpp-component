import React from 'react';
import SayHello from 'hyer-wpp-button';
import './App.css';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <SayHello name="Matheus"/>
    </div>
  );
}

export default App;
