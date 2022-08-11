import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Wrapper from '../../style/wrappers/RegisterPage'
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const UserUpdate = () => {

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [cadmin,setCAdmin] = useState();

    const params = useParams();
    const navi = new useNavigate();

    useEffect(()=>{
        axios.get(`/user/get/${params.id}`).then((res)=>{
            setName(res.data.name);
            setEmail(res.data.email);
            setCAdmin(res.data.cadmin);
        })
    },[])

    const updatedata = {
        name,email,cadmin
    }

    const Update = () =>{

        axios.put(`/user/update/${params.id}`,updatedata);
        alert('usrUpdate');
        navi('/user');
    }

  return (
    <div>
        <Wrapper className='full-page'>
        <form className='form' onSubmit={Update}>
          <h3>Add Users</h3>
            {/* name */}
          <div className='form-row'>
            <label className='form-label'>Name</label>
            <input
              type='text'
              value={name}
              name={name}
              onChange={(e)=>setName(e.target.value)}
              className='form-input'
            />
          </div>
           {/* email */}
          <div className='form-row'>
            <label className='form-label'>Email</label>
            <input
              type='email'
              value={email}
              name={email}
              onChange={(e)=>setEmail(e.target.value)}
              className='form-input'
            />
          </div>
          <div>
            <label className='form-label'>User</label>
            <select className='Subject Unit Comments' type='text' name ={cadmin} onChange={(e)=>setCAdmin(e.target.value)} >
              <option value="Admin">Admin</option>
              <option value="Cadmin">Core-Admin</option>
            </select>
          </div>
        
            <button type='submit' className='btn btn-block'>
            Update
          </button>
        
        
        </form>
      </Wrapper>
    </div>
  )
}
