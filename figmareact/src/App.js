import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AgendarConsulta from './components/Agendar/AgendarConsulta';
import EncaminharPessoa from './components/Encaminhar/EncaminharPessoa';
import MenuHistorico from './components/Historico/MenuHistorico';
import LoginPage from './components/Login/LoginPage';
import MenuAssistente from './components/MenuAssistente/MenuAssistente';
import MenuSecretaria from './components/MenuSecretaria/MenuSecretaria';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route 
          path="/menuassistente" 
          element={
            <PrivateRoute>
              <MenuAssistente />
            </PrivateRoute>
          } 
        />      
        <Route 
          path="/menusecretaria" 
          element={
            <PrivateRoute>
              <MenuSecretaria />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/encaminhar" 
          element={
            <PrivateRoute>
              <EncaminharPessoa />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/agendar" 
          element={
            <PrivateRoute>
              <AgendarConsulta />
            </PrivateRoute>
          } 
        />
        <Route
          path="/historico"
          element={
            <PrivateRoute>
              <MenuHistorico />
            </PrivateRoute>
          }
          />
      </Routes>
    </Router>
  );
}

export default App;
