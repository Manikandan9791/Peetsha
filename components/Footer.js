import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import FacebookIcon from "@mui/icons-material/Facebook"
import {Link} from "react-router-dom";
import "../pages/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
           <Link to='instagram.com/kmkandan1999'>
           <InstagramIcon/>
           </Link> 
            <TwitterIcon/>
            <LinkedInIcon/>
            <FacebookIcon/>
            <p>&copy;2021 manikandan.com</p>

        </div>
    </div>
  )
}

export default Footer