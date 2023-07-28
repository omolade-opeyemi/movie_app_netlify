import { useEffect, useState } from 'react';
import logo from './logo.svg';
import Genre from './Components/genre';
import Moviesbody from './Components/moviesbody';
import NavbarComponent from './Components/navbar';
import './App.css';
import { DataProvider } from './Context/DataContext';



function App() {


  return (
    <div>
      <DataProvider>

        <NavbarComponent/>

        <Genre/>

        <Moviesbody/>

      </DataProvider>
    </div>

  );
}

export default App;
