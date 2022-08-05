import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    password: '',
  });


  // if (logout) {
  //   localStorage.removeItem("user");
  //   window.location = "/admin";
  // }

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
     console.log(credentials);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/user/login", credentials);
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

        
        navigate("/user");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="name"
          id="name"
          onChange={handleChange}
          className="lInput"
        />
        <br/><br/>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <br/>     
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export const Login = () => {

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem('user')

//     if (loggedInUser != null) {
//     }
//   }, []);

//   const [name, setName] = useState('')
//   const [password, setPassword] = useState('')
//   const [data, setData] = useState('')

//    const submitHandler = (e) => {
//     // e.preventDefault()

//     axios
//       .post('/user/login', {
//         name: name,
//         password: password,
//       })
//       .then((res) => {
//         if (res.data == 'granted') {
//           console.log('success')
//           // localStorage.setItem('user', name)
//           // axios
//           //   .get(`http://localhost:5000/user/${email}`, {
//           //     params: {
//           //       email: email,
//           //     },
//           //   })
//           //   .then(function (response) {
//           //     setData(response.data)
//           //     console.log(response.data)
//           //     console.log(data)
//           //     localStorage.setItem('userS', response.data.specialization)
//           //     localStorage.setItem('userP', response.data.position)
//           //     localStorage.setItem('userN', response.data.name)
//           //     localStorage.setItem('userI', response.data.id)

//           //     window.location = '/dashBoard'
//           //   })
//         } 
//         //else if (res.data == 'denied') {
//         //   SweatAlert('Incorrect Password')
//         // } else {
//         //   SweatAlert('User Not Found')
//         // }
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }
//   return (
//       <div>
//           <form onSubmit={submitHandler}>
//               <label>Name</label>
//               <input id='name'
//                 label='Email Address'
//                 name='name'
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}/><br /><br />
//               <label>password</label>
//               <input id='password'
//                 label='Password'
//                 name='pasword'
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password} /><br /><br />
        
//               <button type='submit'>Login</button>
//           </form>
//     </div>
//   )
// }
