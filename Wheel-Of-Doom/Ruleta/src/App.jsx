import React, { useState, useEffect } from 'react';
import './App.css';
import Queen from './Componentes/BlogQueen/Queen.jsx';
import Home from './Views/Home.jsx';
// import RouletteTable from './Componentes/roulette/RouletteTable.jsx';
import { UserService } from "../userService.js";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const users = await UserService.getAllUsers();
        setUserList(users);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    }
    fetchData();
  }, []);

  const handleSorteoComplete = () => {
    console.log("Sorteo completado");
  };

  return (
    <div className="App">
      <Queen />
      <Home userList={userList} />
      {/* <RouletteTable userList={userList} onSorteoComplete={handleSorteoComplete} /> */}
    </div>
  );
}

export default App;