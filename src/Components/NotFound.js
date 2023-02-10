import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <div className='fs-1' style={{ textAlign: "center", marginTop: "300px", color: "white" }}>Oops..Page not found..🚫
            <p><Link to='/' style={{color:"white"}}>Back to home page</Link></p>
            </div>

        </>
    )
}

export default NotFound