import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../../commn/Navbar';

export const IndustryDisplay = () => {
    const [items,setItem] = useState([]);

    const navi = new useNavigate

    useEffect(() => { 
      try {
          axios.get( "/industry/get").then((res) => {
              setItem(res.data);
          })
      } catch (err) { 
          console.log(err);
      }
      console.log('node men concel beg and t')
  },[]);
  console.log(items);

    // delete industry 
    const Deleteindustry = (id) =>{
        axios.delete(`/industry/delete/${id}`);
        navigator('/Aindustry');
    }

  return (
    <div>
        <Navbar/>
        <div className='mt-5' style={{textAlign: 'center'}}>
            <div className='' style={{textAlign: 'center'}}> 
                <Link to={'/industryadd'}>
                    <button type="button" className="btn btn-primary mt-5">ADD New Industry</button>
                </Link>
            </div>
            <div className='mt-5'>
                <h3>Industry Partnership</h3>
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
                        {items.map((industry) => { 
                        return (
                            <tr>
                                    <td><><img className='img-fluid rounded mb-1 mb-lg-0' src = {'/industry/' + industry.image}/></></td>
                                    <td>{industry.name}</td>
                                    <td>
                                        <Link to={`/updateindustry/${industry._id}`}>
                                            <button className='btn'>Update</button>
                                        </Link>
                            
                                        <button className='btn' onClick={()=>{
                                            Deleteindustry(industry._id);
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

