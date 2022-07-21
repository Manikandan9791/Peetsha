 import React from 'react'
 import {Link} from "react-router-dom";
import '../pages/Home.css';
 
 function Home() {
 
   return (
     <div className='home'   style={{ backgroundImage: `url(${'img-1.png'})` }}>
      
       <div className='headerContainer' >
        
         <h1>Manikandan pizzeria</h1>
         <p>PIZZA TO FIT ANY TASTE</p>
         <Link  to="/menu">
         <button>
           ORDER NOW
         </button>
         </Link>
         

       </div>
     </div>
   )
 }
 
 export default Home