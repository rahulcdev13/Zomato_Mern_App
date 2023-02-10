import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/header.css'

const Slider = () => {
    const zomato = { fontWeight: "bold", fontStyle: "italic", fontSize: "10vw" }
    const heading = { fontStyle: "italic" }
    return (
        <>  
            <Carousel slide  >
                <Carousel.Caption>
                    <div className='carousal-caption' style={{ zIndex: "10" }}>
                        <p style={zomato} >Zomato</p> 
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                            <button className="btn btn-outline-danger text-light bg-danger" type="submit">Search</button>
                        </form>  
                    </div>
                    <p className='mt-4 fs-1' style={heading}>Discover the best food & drinks in Pune</p> <br/>
                </Carousel.Caption>
                <Carousel.Item >
                    <img id='Carousel'
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1371981123/photo/hamburger-with-cheese-and-fresh-vegetables.jpg?b=1&s=170667a&w=0&k=20&c=L7o8GcG7tlqllZV_4pvEVSA4CVK7PuROrzHRpaCQ7FY="
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img id='Carousel'
                        className="d-block w-100"
                        src="https://b.zmtcdn.com/data/pictures/0/19009670/e65f7f6325e80a7258fae8fbee9dc43a.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img id='Carousel'
                        className="d-block w-100"
                        src="https://wallpapercave.com/wp/wp6988485.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel> 
        </>
    )
}

export default Slider