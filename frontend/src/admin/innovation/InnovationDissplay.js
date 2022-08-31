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
        <div className='mt-5' style={{textAlign: 'center'}}>
            <div className='mt-5' style={{textAlign: 'center'}}> 
                <Link to={'/innovationadd'}>
                    <button type="button" className="btn btn-primary mt-5">ADD Innovations</button>
                </Link>
            </div>
            <div className='mt-5'>
              <table className="table" style={{width:'70%', marginLeft:"15%",marginRight:"15%"}}>
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Short Description</th>
                                <th scope="col">Description</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {items.map((innovation) => { 
                        return (
                            <tr>
                                    <td><><img className='img-fluid rounded mb-1 mb-lg-0' src = {'/upload/' + innovation.image}/></></td>
                                    <td>{innovation.name}</td>
                                    <td>
                                        <textarea  className="form-control" 
                                                    id="exampleFormControlTextarea1"
                                                    rows={8}
                                                    cols-xs-10
                                                    type='desc'
                                                    disabled>
                                        {innovation.desc}
                                        </textarea>
                                    </td>
                                    <td>
                                        <textarea  class="form-control" 
                                                    id="exampleFormControlTextarea1"
                                                    rows={8}
                                                    cols-xs-10
                                                    cols={20}
                                                    type='desc'
                                                    disabled>
                                        {innovation.longdesc}
                                        </textarea>
                                    </td>
                                    {/* <td>{innovation.longdesc}</td> */}
                                    <td>
                                        <Link to={`/updateinnovation/${innovation._id}`}>
                                            <button className='btn'>Update</button>
                                        </Link>
                                    
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
