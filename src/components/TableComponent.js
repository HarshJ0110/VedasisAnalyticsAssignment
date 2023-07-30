// import React, { useState, useEffect } from 'react';
// import { Table, Pagination } from 'react-bootstrap';
// import "./table_.css"

// const Table_ = () => {

//   return (
//     <div className='table1'>

//     </div>
// )};

// export default Table_;

import React, { useState, useEffect, useContext } from 'react';
import './tablecomponent.css';
import DashContext from '../states.js/DashContext';
import ScrollTable from './ScrollTable';

const TableComponent = () => {
  const { searchTerm } = useContext(DashContext);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.username.toLowerCase().includes(searchTerm.toLowerCase()) || item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollTable>
    <div className='table1'>
      <div className="table-container">
        {filteredData.length > 0 ? (
          <table>
            <thead>
              <tr>
                
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(item => (
                <tr key={item.id}>
                  
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="not-found">Data not found.</p>
        )}

      </div>
    </div>
    </ScrollTable>
  );
};

export default TableComponent;
