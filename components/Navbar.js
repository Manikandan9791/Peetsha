import React,{useState} from 'react'
import './Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import {Link} from "react-router-dom";
function Navbar() {
 
  const [openLinks,setOpenLinks]=useState(false);
   
  const toggleNavbar = () =>
  {
       setOpenLinks(!openLinks)
  }; 

  return (


    <div className='navbar'> 
    <div className='leftSide' id={openLinks? "close" : "open"}>
        <img className='picture' src='/img-1.png' />
        <div className="hiddenLinks" > 
        <Link to='/' >Home</Link>
       <Link to='/menu' >Menu</Link>
        <Link to='/about' >About</Link>
       <Link to='/contact' >Contact</Link>
      
        </div>
        </div>
    <div className='rightSide'>
      <Link to='/' >Home</Link>
       <Link to='/menu' >Menu</Link>
        <Link to='/about' >About</Link>
       <Link to='/contact' >Contact</Link>
         <button onClick={toggleNavbar}>
           <ReorderIcon/>
         </button>
    </div>
    </div>
  )
}

export default Navbar