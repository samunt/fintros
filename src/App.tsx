import React from 'react';
import NavBar from './components/NavBar';
import Blog from './components/Blog';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "./contexts/ThemeContext";

function App() {
  return (
      <ThemeProvider>
        <NavBar title="Fintros App"/>
        <Blog/>
      </ThemeProvider>
  );
}

export default App;
