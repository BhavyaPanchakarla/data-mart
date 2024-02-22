import React from 'react'
import '../styles/SignIn.scss';
import { useState } from 'react';
import bg_Img from '../images/background_image.png'
import { useDispatch } from 'react-redux';
import { login } from '../global/AuthSlice'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function SignIn() {
 

  const [username, setUserName] = useState();
  const [password, SetPassword] = useState();
  const [cookies, setcookies] = useCookies(['isValid','isAdmin']);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("submitted");
    // dispatch(
    //   login({
    //     isValid: true,
    //     isAdmin: true
    //   })
    // );
    setcookies('isValid', true);
    setcookies('isAdmin', true);
    navigate('/');
  }

  return (

    <div id="signIn" style={{backgroundImage: `url(${bg_Img})`}}>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <div className="user-name">
       <input type="text" name="User Name" id="User Name" placeholder="User Name" autoComplete="on required" onChange={e => setUserName(e.target.value)}></input>
      <i className='bx bxs-user'></i>
      </div>
       <br></br>
       <div className="user-name">
       <input type="password" name="password" id="password" placeholder="Password" autoComplete="on reuired" onChange={e => SetPassword(e.target.value)}></input>
       <i className='bx bxs-lock-alt'></i>
       </div>
      </form>
      <button type="submit" className="btn" onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}
export default SignIn;