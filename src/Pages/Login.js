import React,{useState} from 'react'
import '../Styles/signup.css'
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {
  
  const [credential, setCredential] = useState({email: "", password: ""})
  const navigate = useNavigate()
  const handleSumbit = async (e) => { 
    e.preventDefault();
    console.log(JSON.stringify({email:credential.email,password:credential.password}));
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:credential.email,password:credential.password}) 
    });
    const json = await response.json()
    console.log(json)
    if (!json.success) {
      // alert('Enter valid Credential..')
      navigate('/')
    }
    if (json.success) {
      navigate('/')
    }
  } 
  const eventHandler = (event) => {
    setCredential({...credential,[event.target.name]:event.target.value})
  }
  return (
    <>
      <div className='bgimagelogin'>
        <div className='loginpage'>
          <p className='sign'>Login</p>
          <form onSubmit={handleSumbit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className="form-control" name='email' value={credential.email} onChange={eventHandler} placeholder='Enter Your Email-id..' id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" placeholder='Enter Your Password..' name='password' value={credential.password} onChange={eventHandler}  className="form-control" id="exampleInputPassword1" />
            </div>
            {/* <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div> */}
            <button type="submit" className="btn btn-danger">Login</button>
            <hr />
            <p>Create new user ? <span><Link style={{ textDecoration: "none", fontWeight: "bold" }} to='/signup' >Sign Up</Link></span> </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login