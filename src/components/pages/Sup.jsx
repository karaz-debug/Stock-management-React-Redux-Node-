import React, { useState, useEffect } from 'react';
import Supcard from './container/Supcard';

export default function Sup() {
  // State variable to store the supplier data
  const [suppliers, setSuppliers] = useState([]);

  // Fetch supplier data from the backend when the component mounts
  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await fetch('/api/suppliers');
      if (response.ok) {
        const data = await response.json();
        setSuppliers(data); // Update the state with the fetched supplier data
      } else {
        console.error('Failed to fetch suppliers:', response.status);
      }
    } catch (error) {
      console.error('Error fetching suppliers:', error);
    }
  };

  return (
    <div className="row ml-auto">
      <div className="col-lg-12 m-t-2">
        <div className="card-columns">
          {suppliers.map((supplier) => (
            <Supcard des={supplier} key={supplier.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
