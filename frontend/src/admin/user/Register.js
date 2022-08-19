import React, { useState } from 'react';
import axios from 'axios';
import Wrapper from '../../style/wrappers/RegisterPage'
import { Navbar } from '../../commn/Navbar';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [name, setName] = useState();
  const [email,setEmail] = useState();
  const [cadmin,setCAdmin] = useState();
  const [password,setPassword] = useState();
  const [rpassword,setRpassword] = useState();

  const navi = new useNavigate();

  const Submit = (e) => {
    e.preventDefault();

    if(password !== rpassword){
      console.log('password does not match');
      alert('password does not match');
    }else{
    const newuser = {
      name,
      email,
      password,
      rpassword,
      cadmin

    }
    axios.post('/user/reg',newuser).then((res)=>{
      alert('Succsessfully register');
      navi('/user');
    })

    }
  }
  return (
    <div>
      <Navbar/>
       <Wrapper className='full-page'>
        <form className='form' onSubmit={Submit}>
          <h3>Add Users</h3>
            {/* name */}
          <div className='form-row'>
            <label className='form-label'>Name</label>
            <input
              type={name}
              value={name}
              name={name}
              onChange={(e)=>setName(e.target.value)}
              className='form-input'
            />
            {/* email */}
          </div>
          <div className='form-row'>
            <label className='form-label'>Email</label>
            <input
              type={email}
              value={email}
              name={email}
              onChange={(e)=>setEmail(e.target.value)}
              className='form-input'
            />
          </div>
          {/* user */}
          <div>
            <label className='form-label'>User</label>
            <select className='Subject Unit Comments' type={cadmin} name ={cadmin} onChange={(e)=>setCAdmin(e.target.value)} >
              <option value="Admin">Admin</option>
              <option value="Cadmin">Core-Admin</option>
            </select>
          </div>
          {/* password */}
          <div className='form-row'>
            <label className='form-label'>Password</label>
            <input
              type={password}
              value={password}
              name={password}
              onChange={(e)=>setPassword(e.target.value)}
              className='form-input'
            />
          </div>
          <div className='form-row'>
            <label className='form-label'>ReEnter Password</label>
            <input
              type={password}
              value={rpassword}
              name={rpassword}
              onChange={(e)=>setRpassword(e.target.value)}
              className='form-input'
            />
          </div>
          <button type='submit' className='btn btn-block'>
            submit
          </button>
        </form>
      </Wrapper>
  </div>
  )
}

export default Register;