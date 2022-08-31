
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../../commn/Navbar';
import Wrapper from '../../style/wrappers/RegisterPage';
import { useNavigate } from 'react-router-dom';

export const AddUnivaersity = () => {

  const [name,setName] = useState('');
  const [file,setFile] = useState([]);

  const ImageAdd = (e) => {
    setFile(e.target.files[0]);
  }

  const navi = new useNavigate();

  const Submit = (e) => {

    e.preventDefault();
    
    const formData = new FormData();

    formData.append("name",name);
    formData.append("file",file);

    setName("");

     axios.post("/university/add",formData).then((res)=>{
      alert('Succsessfully Added');
      navi('/Auniversity');
    })
  }

  return (
    <div>
        <Navbar/>
        <div>
          <Link to={'/Auniversity'}>
            <div className='' style={{textAlign: 'center'}}> 
              <button type="button" className="btn btn-primary">University</button>
            </div>
          </Link>
        </div>
        {/* FORM */}
        <div>
           <Wrapper className='full-page'>
            <form className='form' onSubmit={Submit} encType="multipart/form-data">
              <h3>Add New University</h3>
                {/* name */}
              <div className='form-row'>
                <label className='form-label'>Name</label>
                <input
                  type='text'
                  name={name}
                  onChange={(e)=>setName(e.target.value)}
                  className='form-input'
                />
              </div>
              {/* image */}
              <div className='form-row'>
                <label className='form-label'>Image</label>
                <input
                  type='file' multiple 
                  filename="file"
                  onChange={ImageAdd}
                  className='form-input'
                />
              </div>
              <button type='submit' className='btn btn-block'>
                submit
              </button>
            </form>
          </Wrapper>
        </div>
      </div>
  )
}

