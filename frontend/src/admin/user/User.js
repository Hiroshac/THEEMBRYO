import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../../style/css/admin/User.css"
import { Navbar } from '../../commn/Navbar.js';
import NavLink, { Link } from 'react-router-dom';

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
    });
    //delete user 
    const Deleteuser = (id) =>{
        axios.delete(`/user/delete/${id}`)
    }

  return (
      <div>
        <div>
        <Navbar/>
        </div>
        <div className='mt-5' style={{textAlign: 'center'}}>
            <div className='dbtn'>
                <Link to='/reg'>
                     <button className='btn btn-primary mt-5'>Add User</button>
                </Link>
                <Link to='/user'>
                     <button className='btn btn-primary mt-5 '>User Details</button>
                </Link>
            </div>
            <div className='td'>
            <table className="table" style={{width:'70%', marginLeft:"15%",marginRight:"15%"}}>
                <thead>
                    <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {data.map((user) => { 
                      return (
                          <tr>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.cadmin}</td>
                              <td>
                               <Link to={`/updateuser/${user._id}`}>
                                    <button className='btn'>Update</button>
                               </Link>
                                <button className='btn' onClick={()=>{
                                    Deleteuser(user._id);
                                }}>Delete</button>
                              </td>
                          </tr>
                      )
                  })}
                </tbody>
                </table>
            </div>
            

            {/* {(JSON.parse(localStorage.getItem('user')).cadmin) == 'Admin' ?(
                    <>
                       <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {data.map((user) => { 
                      return (
                          <tr>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.cadmin}</td>
                              <td>
                               <Link to={`/updateuser/${user._id}`}>
                                    <button>Update</button>
                               </Link>
                                <button>Delete</button>
                              </td>
                          </tr>
                      )
                  })}
                </tbody>
                </table>
            </div>

                    </>

            ):(
                <>
                   <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {data.map((user) => { 
                      return (
                          <tr>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.cadmin}</td>
                          </tr>
                      )
                  })}
                </tbody>
                </table>
            </div>

                </>

                 )} */}
         
        </div>
    </div>
  )
}
