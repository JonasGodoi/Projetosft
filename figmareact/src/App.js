import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AgendarConsulta from './components/Agendar/AgendarConsulta';
import GerenciarBeneficiado from './components/Beneficiado/GerenciarBeneficiado';
import EncaminharPessoa from './components/Encaminhar/EncaminharPessoa';
import MenuHistorico from './components/Historico/MenuHistorico';
import LoginPage from './components/Login/LoginPage';
import MenuAssistente from './components/MenuAssistente/MenuAssistente';
import MenuSecretaria from './components/MenuSecretaria/MenuSecretaria';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RelatorioAssistente from './components/RelatorioAssistente/RelatorioAssistente';



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
          <Route
            path="/relatoriosecretaria"
            element={
              <PrivateRoute>
                <RelatorioAssistente />
              </PrivateRoute>
            }
          />
          <Route
            path="/gerenciarbeneficiario"
            element={
              <PrivateRoute>
                <GerenciarBeneficiado />
              </PrivateRoute>
            }
          />
      </Routes>
    </Router>
  );
}

export default App;
