import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Inventory from '../components/Inventory';

const InventoryPage = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await axios.get('/api/inventory');
                setInventoryItems(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchInventory();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Inventory Management</h1>
            <Inventory items={inventoryItems} />
        </div>
    );
};

export default InventoryPage;