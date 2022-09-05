import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../../commn/Navbar';

export const OngoingDisplay = () => {
    const [items,setItem] = useState([]);

    const navi = new useNavigate

    useEffect(() => { 
      try {
          axios.get( "/ongoing/get").then((res) => {
              setItem(res.data);
          })
      } catch (err) { 
          console.log(err);
      }
      console.log('node men concel beg and t')
  },[]);
  console.log(items);

    // delete industry 
    const Deleteongoing = (id) =>{
        axios.delete(`/ongoing/delete/${id}`);
        navigator('/Aongoing');
    }

  return (
    <div>
        <Navbar/>
        <div className='mt-5' style={{textAlign: 'center'}}>
            <div className='' style={{textAlign: 'center'}}> 
                <Link to={'/ongoingadd'}>
                    <button type="button" className="btn btn-primary mt-5">ADD New Ongoing</button>
                </Link>
            </div>
            <div className='mt-5'>
                <h3>Ongoing Partnership</h3>
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
                        {items.map((ongoing) => { 
                        return (
                            <tr>
                                    <td><><img className='img-fluid rounded mb-1 mb-lg-0' src = {'/ongoing/' + ongoing.image}/></></td>
                                    <td>{ongoing.name}</td>
                                    <td>
                                        <Link to={`/updateongoing/${ongoing._id}`}>
                                            <button className='btn'>Update</button>
                                        </Link>
                            
                                        <button className='btn' onClick={()=>{
                                            Deleteongoing(ongoing._id);
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

