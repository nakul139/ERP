import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Leads from '../components/Leads';

const LeadsPage = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const response = await axios.get('/api/leads');
                setLeads(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLeads();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Leads</h1>
            <Leads leads={leads} />
        </div>
    );
};

export default LeadsPage;