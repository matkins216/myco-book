import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Container, Grid, Link, typography } from '@mui/material';
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import AddGrowPage from './pages/AddGrowPage/AddGrowPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container spacing={1} maxWidth="xl" sx={{ height: "100vh" }}>
        <AddGrowPage />
      

    </Container>
  )
}

export default App;
