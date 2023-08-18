import React from 'react'
import onpage from '../../assets/onpage.png'

const Picture = () => {
  return (
    <div>
        <img 
        style={{height:"45vh", 
        width:"98%",
        margin:"auto", 
        marginTop:"4.5rem",
        position:"relative",
        backgroundPosition:"no-repeat",
        backgroundSize:"contain",
        
    }}
        src={onpage} alt="" />
        
    </div>
  )
}

export default Picture