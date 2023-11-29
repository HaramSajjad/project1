import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
    <main>
        <h1> Contact Us  </h1>
        <form>
     <div>
    <label>Name</label>
 <input type="text" required placeholder='abc' />
 </div>
 <div>
    <label>E-mail</label>
 <input type="email" required placeholder='abc@xyz.com' />
 </div>
 <div>
    <label>Message</label>
 <input type="message" required placeholder='Tell us About your Query...' />
 </div>

 <button type='submit'>  Send </button>
        </form>
    </main>
    </div>
  )
}

export default Contact
