import React from 'react';
import MainContent from './pages/MainContent';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <section id="app">
      {/* This is Your Main */}
      <BrowserRouter>
        <MainContent></MainContent>
      </BrowserRouter>
    </section>
  );
}

export default App;