import React from 'react'

const Cart = () => {
  return (
    <div className='container-fluid' style={{ marginTop: "10px" }}>
      <div className="row">
        <div className="col-sm-3">
          <div className="card mt-3">
            <img src="https://b.zmtcdn.com/data/pictures/6/18534886/9bc88d32d28f5027530f307c210cfd43_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Margherita Pizza</h5>
              <p className="card-text">Pizza topped with our herb-infused signature Box Of 2 - Veg Pizza</p>
              <div className='container'>
                <select className='mt-2 me-4 h-100 rounded'>
                  {Array.from(Array(10), (e, i) => {
                    return (
                      <> 
                        <option key={i + 1} value={i + 1}> {i + 1}</option>
                      </>
                    )
                  })}
                </select>
                <select className='mt-2 h-100 rounded'> 
                        <option value="Regular" >Regular</option>
                        <option value="Mediaum">Mediaum</option>
                        <option value="Large">Large</option> 
                </select>
                <div className='d-inline h-100 fs-4 ml-4 '> Total Price : 
                </div> 
              </div>
              {/* <Link to='/' className="btn btn-primary">Go somewhere</Link> */}
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card mt-3">
            <img src="https://b.zmtcdn.com/data/reviews_photos/168/ea025188483e25d7b3c08bce43516168_1602785909.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Chicken 65</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              {/* <Link to='/' className="btn btn-primary">Go somewhere</Link> */}
            </div>
          </div>
        </div>
        <div className="col-sm-3 mt-3">
          <div className="card">
            <img src="https://b.zmtcdn.com/data/pictures/chains/6/18273566/95057a68edae3778df620006d0d8744f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Burger</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              {/* <Link to='/' className="btn btn-primary">Go somewhere</Link> */}
            </div>
          </div>
        </div>
        <div className="col-sm-3 mt-3">
          <div className="card">
            <img src="https://b.zmtcdn.com/data/pictures/chains/6/19174026/a4c9c81117452013ba6745e5d92542b2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Momos</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              {/* <Link to='/' className="btn btn-primary">Go somewhere</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
