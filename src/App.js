import React from 'react';

import Table from './components/Table/Table';

import './App.css';
import useWindowDimensions from './hooks/useWindowsDimensions/useWindowsDimensions';

const App = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div className="App" style={{minHeight: height, width: width}}>
        <Table />
    </div>
  );
}



export default App;
