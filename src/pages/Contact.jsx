


// import React from 'react'
// import { Form } from 'react-router-dom'

// let MyformData = async({ request })=>{
//   try {
//     let res = await request.formData()
//     console.log(res)
//   } catch (error) {
//     console.log(error)
//   }
// }

// const Contact = () => {
   
//   return (
    // <div>
    //   <div><h1> Contact us </h1></div>
    //   <div>
    //     <Form action="/Contact" method="POST">
    //       <label htmlForFor="name">Username</label>
    //       <input type="text" name="username" id="name" required placeholder='Enter your name' autoComplete='false'/><br />
    //       <label htmlForFor="email">Email</label>
    //       <input type="email" name="useremail" id="email" required placeholder='Enter your email' autoComplete='false'/><br />
    //       <label htmlForFor="text">Message</label>
    //       <textarea name="message" id="message" cols="30" rows="5" required placeholder='We are always here to help you' autoComplete='false'></textarea><br />
    //       <button type='submit'>Submit</button>
    //     </Form>
    //   </div>
    // </div>
//   )
// }

// export default Contact



import React from 'react'
import { Form } from 'react-router-dom'

export let MyformData = async({ request })=>{
  try {
    let res = await request.formData()
    let data = Object.fromEntries(res)
    console.log(data)
    console.log(res)
    return null;
  } catch (error) {
    console.log(error)
  }
}

const Contact = () => {
  return (
    <div>
       <div>
      <div><h1> Contact us </h1></div>
      <div>
        <Form action="/contact" method="POST">
          <label htmlForFor="name">Username</label>
          <input type="text" name="username" id="name" required placeholder='Enter your name' autoComplete='false'/><br />
          <label htmlForFor="email">Email</label>
          <input type="email" name="useremail" id="email" required placeholder='Enter your email' autoComplete='false'/><br />
          <label htmlForFor="text">Message</label>
          <textarea name="message" id="message" cols="30" rows="5" required placeholder='We are always here to help you' autoComplete='false'></textarea><br />
          <button type='submit'>Submit</button>
        </Form>
      </div>
    </div>
    </div>
  )
}

export default Contact
