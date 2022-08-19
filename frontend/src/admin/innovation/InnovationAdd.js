import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../../commn/Navbar';
import Wrapper from '../../style/wrappers/RegisterPage';
import { useNavigate } from 'react-router-dom';

export const InnovationAdd = () => {

  const [name,setName] = useState('');
  const [desc,setDesc] = useState('');
  const [file,setFile] = useState([]);

  const ImageAdd = (e) => {
    setFile(e.target.files[0]);
  }

  const navi = new useNavigate();

  const Submit = (e) => {

    e.preventDefault();
    
    const formData = new FormData();

    formData.append("name",name);
    formData.append("desc",desc);
    formData.append("file",file);

    setName("");
    setDesc("");

    // for (var value of formData.value()) {
    //   console.log(value);
    // }

     axios.post("/innovation/add",formData).then((res)=>{
      alert('Succsessfully Added');
      navi('/Ainnovation');
    })
  }

  return (
    <div>
        <Navbar/>
        <div>
          <Link to={'/Ainnovation'}>
            <div className='' style={{textAlign: 'center'}}> 
              <button type="button" className="btn btn-primary">Innovations</button>
            </div>
          </Link>
        </div>
        {/* FORM */}
        <div>
           <Wrapper className='full-page'>
            <form className='form' onSubmit={Submit} encType="multipart/form-data">
              <h3>Add Innovation</h3>
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
               {/* desc */}
              <div className='form-row'>
                <label className='form-label'>Descriptiopn</label>
                <input
                  type='text'
                  value={desc}
                  name={desc}
                  onChange={(e)=>setDesc(e.target.value)}
                  className='form-input'
                />
              </div>
                 {/* Image */}
              {/* <div className='form-row'>
                <label className='form-label'>Image</label>
                <input
                  type='file' multiple 
                  value={image}
                  name={image}
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={ImageAdd}
                  className='form-input'
                />
              </div> */}
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
