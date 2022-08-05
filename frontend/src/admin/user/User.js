import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navbar } from '../../commn/Navbar.js';

export const User = () => {
    const [data, setData] = useState([]);

    useEffect(() => { 
        try {
            axios.get( "/user/get").then((res) => {
                setData(res.data);
            })
        } catch (err) { 
            console.log(err);
        }
    })
  return (
      <div>
        <div>
        <Navbar/>
        </div>
          <table>
              <tr>
                  <th>Name</th>
                  <th>email</th>
                  <th>Status</th>
              </tr>
              
                  {data.map((user) => { 
                      return (
                          <tr>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.isAdmin}</td>
                          </tr>
                      )
                  })}
              
          </table>
    </div>
  )
}
