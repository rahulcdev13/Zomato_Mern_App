import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/header.css'


const Header = () => {
    return (
        <>
            <div className='headers' >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ marginBottom: "0px" }} >
                    <div className="container-fluid">
                        <Link className="navbar-brand fs-1" style={{ fontWeight: "bold", fontStyle: "italic" }} to='/'>Zomato</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" style={{ textDecoration: "none" }} to='/' aria-current="page" >Home</Link>
                                </li> 
                                <li className="nav-item">
                                    <Link className="nav-link" to='/order' style={{ textDecoration: "none" }}>My order</Link>
                                </li>
                                <li className="nav-item" >
                                    <Link className="nav-link text-white font-weight-bold fs-4" to='https://www.zomato.com/mobile'  target="_blank" rel="noreferrer" style={{ textDecoration: "none",fontWeight: "bold", color: "white" }} aria-current="page" > 🔍 Get The App</Link> 
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav" style={{ fontWeight: "bold", color: "white" }} >
                            <li className="nav-item" >
                                <Link className="nav-link" style={{ textDecoration: "none" }} to='/login' aria-current="page" >Investor-Relation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ textDecoration: "none" }} to='/signup' aria-current="page" >Add Restaurant</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link" style={{ textDecoration: "none" }} to='/login' aria-current="page" >Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ textDecoration: "none" }} to='/signup' aria-current="page" >Signup</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header
