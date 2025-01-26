import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Welcome to the Custom ERP Dashboard</h1>
            <div className="dashboard-links">
                <Link to="/inventory" className="dashboard-link">Inventory</Link>
                <Link to="/leads" className="dashboard-link">Leads</Link>
                <Link to="/sales" className="dashboard-link">Sales</Link>
                <Link to="/purchase" className="dashboard-link">Purchase</Link>
                <Link to="/user" className="dashboard-link">User Management</Link>
            </div>
        </div>
    );
};

export default Dashboard;