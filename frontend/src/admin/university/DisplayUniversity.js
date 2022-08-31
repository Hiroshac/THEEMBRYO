import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../../commn/Navbar';

export const DisplayUniversity = () => {
    const [items,setItem] = useState([]);

    useEffect(() => { 
      try {
          axios.get( "/university/get").then((res) => {
              setItem(res.data);
          })
      } catch (err) { 
          console.log(err);
      }
      console.log('node men concel beg and t')
  });

    // delete university 
    const Deleteuniversity = (id) =>{
        axios.delete(`/university/delete/${id}`);
    }

  return (
    <div>
        <Navbar/>
        <div className='mt-5' style={{textAlign: 'center'}}>
            <div className='' style={{textAlign: 'center'}}> 
                <Link to={'/universityadd'}>
                    <button type="button" className="btn btn-primary mt-5">ADD New University</button>
                </Link>
            </div>
            <div className='mt-5'>
                <h3>University Partnership</h3>
              <table className="table" style={{width:'50%', marginLeft:"25%",marginRight:"25%"}}>
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {items.map((university) => { 
                        return (
                            <tr>
                                    <td><><img className='img-fluid rounded mb-1 mb-lg-0' src = {'/university/' + university.image}/></></td>
                                    <td>{university.name}</td>
                                    <td>
                                        <Link to={`/updateuniversity/${university._id}`}>
                                            <button className='btn'>Update</button>
                                        </Link>
                            
                                        <button className='btn' onClick={()=>{
                                            Deleteuniversity(university._id);
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

