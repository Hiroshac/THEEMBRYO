import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Wrapper from '../../style/wrappers/RegisterPage';

export const IndustryUpdate = () => {

    const[name,setName] = useState();

    const params = useParams();
    const navi = new useNavigate();

    useEffect(()=>{
        axios.get(`/industry/get/${params.id}`).then((res)=>{
            setName(res.data.name);
        })
    },[]);

    const data = {
        name,
    }

    const Update = () => {
        axios.put(`/industry/update/${params.id}`,data);
        alert('Update Industry');
        navi('/Aindustry');
    }

  return (
    <div>
        <Wrapper className='full-page'>
        <form className='form' onSubmit={Update}>
          <h3>Update Innovation</h3>
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

         <button type='submit' className='btn btn-block'>
            Update
          </button>
        </form>
      </Wrapper>
    </div>
  )
}
