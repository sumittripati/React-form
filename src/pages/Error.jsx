// import React from 'react'
// import { NavLink } from 'react-router-dom'


// const Error = () => {
//   return (
//     <div>
//       <h2>this page is not found</h2>
//       {/* <NavLink to ="/">go back home</NavLink> */}

//       <NavLink to ="/" style ={{color : "blue"}}>go back home</NavLink>
//     </div>
//   )
// }

// export default Error


import React from 'react'
import { useNavigate } from 'react-router-dom'



const Error = () => {

  let navigate = useNavigate()

  let HandleBackbtn = () => {
    navigate(-1)
  }

  return (
    <div>
      <h2>this page is not found</h2>
      {/* <NavLink to ="/">go back home</NavLink> */}

      <button onClick={HandleBackbtn}>Go Back</button>
    </div>
  )
}

export default Error
