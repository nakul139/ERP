import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import InventoryPage from './pages/InventoryPage';
import LeadsPage from './pages/LeadsPage';
import LoginPage from './pages/LoginPage';
import PurchasePage from './pages/PurchasePage';
import SalesPage from './pages/SalesPage';
import UserPage from './pages/UserPage';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/inventory" component={InventoryPage} />
          <Route path="/leads" component={LeadsPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/purchase" component={PurchasePage} />
          <Route path="/sales" component={SalesPage} />
          <Route path="/user" component={UserPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;