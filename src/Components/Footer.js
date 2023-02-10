import React from 'react'

const Footer = () => {
  const currDate = new Date().getFullYear();
  return (
    <div style={{textAlign:"center", position: 'fixed', bottom: 0, left: 0, right: 0,backgroundColor:"rgb(248, 248, 248)"}}>
      <p style={{ marginTop:"10px"}}>{currDate} © Zomato™ Ltd. All rights reserved.</p>
    </div>
  )
}

export default Footer
