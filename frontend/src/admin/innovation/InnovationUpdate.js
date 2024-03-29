import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Wrapper from '../../style/wrappers/RegisterPage';

export const InnovationUpdate = () => {

    const[name,setName] = useState();
    const[desc,setDesc] = useState();
    const[longdesc,setLongdesc] = useState();

    const params = useParams();
    const navi = new useNavigate();

    useEffect(()=>{
        axios.get(`/innovation/get/${params.id}`).then((res)=>{
            setName(res.data.name);
            setDesc(res.data.desc);
            setLongdesc(res.data.longdesc);
        })
    },[]);

    const data = {
        name,desc,longdesc
    }

    const Update = () => {
        axios.put(`/innovation/update/${params.id}`,data);
        alert('Update Innovation');
        navi('/Ainnovation');
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
           {/* Short Description */}
          {/* <div className='form-row'>
            <label className='form-label'>Short Description</label>
            <input
              type='desc'
              value={desc}
              name={desc}
              onChange={(e)=>setDesc(e.target.value)}
              className='form-input'
            />
          </div> */}
          {/* SHort Description */}
          <div class="form-group">
            <label for="exampleFormControlTextarea1"> Short Description</label>
            <textarea 
              class="form-control" 
              id="exampleFormControlTextarea1"
              rows={10}
              type='desc'
              value={desc}
              name={desc}
              onChange={(e)=>setDesc(e.target.value)} />
          </div>

          {/*  Description */}
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea 
              class="form-control" 
              id="exampleFormControlTextarea1"
              type='desc'
              rows='10'
              value={longdesc}
              name={longdesc}
              onChange={(e)=>setLongdesc(e.target.value)} />
          </div>

            <button type='submit' className='btn btn-block'>
            Update
          </button>
        </form>
      </Wrapper>
    </div>
  )
}
