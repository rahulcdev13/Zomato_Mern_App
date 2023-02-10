import React, { useState } from 'react'
import '../Styles/signup.css'
import { Link,useNavigate } from 'react-router-dom'

const Signup = () => {
  const [credential, setCredential] = useState({name: "", email: "", password: "", location:""})
  const navigate = useNavigate()
  const handleSumbit = async (e) => { 
    e.preventDefault();
    console.log(JSON.stringify({name:credential.name,email:credential.email,password:credential.password,location:credential.location}));
    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:credential.name,email:credential.email,password:credential.password,location:credential.location}) 
    });
    const json = await response.json()
    console.log(json)
    if (json.success) {
      navigate('/login')
    }
    if (!json.success) {
      // alert('Enter valid Credential..') 
      navigate('/login')
    }
  }
 
  const eventHandler = (event) => {
    setCredential({...credential,[event.target.name]:event.target.value})
  }
  return (
    <>
      <div className='bgimage'>
        <div className='signuppage'>
          <p className='sign'>Sign Up</p>
          <form onSubmit={handleSumbit}>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">User Name</label>
              <input type="text" name='name' value={credential.name} onChange={eventHandler} className="form-control" id="exampleInputName" placeholder='Enter Your Name..' aria-describedby="nameHelp" /> 
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" name='email' value={credential.email} onChange={eventHandler} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email-id..' aria-describedby="emailHelp" /> 
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" name='password' value={credential.password} onChange={eventHandler} className="form-control" placeholder='Enter Your Password..' id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputlocation" className="form-label">Location</label>
              <input type="text" name='location' value={credential.location} onChange={eventHandler} className="form-control" placeholder='Enter Your Location..' id="exampleInputlocation" />
            </div>
            <button type="submit" className="btn btn-danger">Sign Up</button>
            <hr />
            <p>Already a user ? <span><Link style={{ textDecoration: "none", fontWeight: "bold" }} to='/login' >Login</Link></span> </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup