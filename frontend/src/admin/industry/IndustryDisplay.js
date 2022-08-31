import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../../commn/Navbar';

export const IndustryDisplay = () => {
    const [items,setItem] = useState([]);

    useEffect(() => { 
      try {
          axios.get( "/industry/get").then((res) => {
              setItem(res.data);
          })
      } catch (err) { 
          console.log(err);
      }
      console.log('node men concel beg and t')
  });

    //delete user 
    const Deleteinnovation = (id) =>{
        axios.delete(`/industry/delete/${id}`);
    }

  return (
    <div>
        <Navbar/>
        <div className='mt-5' style={{textAlign: 'center'}}>
            <div className='mt-5' style={{textAlign: 'center'}}> 
                <Link to={'/industryionadd'}>
                    <button type="button" className="btn btn-primary mt-5">ADD New Industry</button>
                </Link>
            </div>
            <div className='mt-5'>
              <table className="table" style={{width:'70%', marginLeft:"15%",marginRight:"15%"}}>
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {items.map((industry) => { 
                        return (
                            <tr>
                                    <td><><img className='img-fluid rounded mb-1 mb-lg-0' src = {'/upload/' + industry.image}/></></td>
                                    <td>{industry.name}</td>
                                    <td>
                                        <Link to={`/updateindustry/${industry._id}`}>
                                            <button className='btn'>Update</button>
                                        </Link>
                                    
                                        <button className='btn' onClick={()=>{
                                            Deleteinnovation(industry._id);
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
