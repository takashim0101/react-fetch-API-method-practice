import React, { useState } from 'react';
import './App.css';
import FetchData from './FetchData'; // Import FetchData component

function App() {
  return (
        <>
            <div><strong>FetchData</strong></div>
            <FetchData /> {/* Use FetchData component */}
        </>
    );
}

export default App;

