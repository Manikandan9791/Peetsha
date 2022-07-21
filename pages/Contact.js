import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'  style={{ backgroundImage: `url(${'img-3.png'})` }}>
       
        </div>
        <div className='rightSide'>
           <h1>Contact Us</h1> 
           <form id='contact-form' method='POST'>
               <label htmlFor='name'>Full name</label>
               <input name='name' placeholder='Enter full name' type='text'></input>
                <label htmlFor='email'>E-mail</label>
               <input name='email' placeholder='Enter your mail' type='email'></input>
               <label htmlFor='message'>Message</label>
               <textarea rows="6"
               placeholder='Enter message.....'
               name='message'
               required>

                    

               </textarea>
               <button type='submit'>Send Message</button>

           </form>

        </div>

    </div>
  )
}

export default Contact