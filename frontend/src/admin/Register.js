import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {

  const [name, setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [rpassword,setRpassword] = useState();

  const Submit = (e) => {
    e.preventDefault();

    if(password != rpassword){
      console.log('password does not match');
    }else{
      alert('Succsessfully register');
    const newuser = {
      name,
      email,
      password
    }
    axios.post('http://localhost:3000/user/add',newuser).then((res)=>{
      alert('Succsessfully register');
    })

    }
  }

  return (
    <div>
     <form onSubmit={Submit}>
      <div class="form-group">
        <label>Name</label>
        <input type="name" value={name} onChange={(e)=>setName(e.target.value)} class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name"/>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="email"/>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password"value={password} onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div class="form-group">
        <label>Re Password</label>
        <input type="password"value={rpassword} onChange={(e)=>setRpassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  )
}

export default Register;