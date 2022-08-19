import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../../commn/Navbar';

export const InnovationDisplay = () => {
    const [items,setItem] = useState([]);

    useEffect(() => { 
      try {
          axios.get( "/innovation/get").then((res) => {
              setItem(res.data);
          })
      } catch (err) { 
          console.log(err);
      }
      console.log('node men concel beg and t')
  });

    //delete user 
    const Deleteinnovation = (id) =>{
        axios.delete(`/innovation/delete/${id}`);
    }

  return (
    <div>
        <Navbar/>
        <div className='' style={{textAlign: 'center'}}>
            <div className='' style={{textAlign: 'center'}}> 
                <Link to={'/innovationadd'}>
                    <button type="button" className="btn btn-primary">ADD Innovations</button>
                </Link>
            </div>
            <div>
              <table className="table" style={{width:'50%', marginLeft:"25%",marginRight:"25%"}}>
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Description</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {items.map((innovation) => { 
                        return (
                            <tr>
                                    <td><div  className='col-lg-5'><img className='img-fluid rounded mb-4 mb-lg-0' src = {'/upload/' + innovation.image}/></div></td>
                                    {/* <td><img className='img-fluid rounded mb-5 mb-lg-0' src = {innovation.image}/></td> */}
                                    <td>{innovation.name}</td>
                                    <td>{innovation.desc}</td>
                                    <td>
                                        <Link to={`/updateinnovation/${innovation._id}`}>
                                            <button className='btn'>Update</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className='btn' onClick={()=>{
                                            Deleteinnovation(innovation._id);
                                            }}>Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                            })}
                        </tbody>
                </table>
            </div>
          </div>
      </div>
  )
}
