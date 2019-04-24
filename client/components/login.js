// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {auth} from '../store'
// class Login extends Component {
//     state = {  }
//     render() {
//         return (
//             <div>
//             <form onSubmit={handleSubmit} name={name}>
//                 <div>
//                 <label htmlFor="email">
//                     <small>Email</small>
//                 </label>
//                 <input name="email" type="text" />
//                 </div>
//                 <div>
//                 <label htmlFor="password">
//                     <small>Password</small>
//                 </label>
//                 <input name="password" type="password" />
//                 </div>
//                 <div>
//                 <input type="checkbox" id="isShelter" name="isShelter" />
//                 <label htmlFor="isShelter">
//                     Check this box if you are a Dog Shelter
//                 </label>
//                 </div>
//                 <div>
//                 <button type="submit">Login</button>
//                 </div>
//                 {error && error.response && <div> {error.response.data} </div>}
//             </form>
//             <a href="/auth/google">Login with Google</a>
//             </div>
//          );
//     }
// }

// const mapLogin = state => {
//     return {
//       name: 'login',
//       displayName: 'Login',
//       error: state.user.error
//     }
//   }

//   const mapDispatch = dispatch => {
//     return {
//       handleSubmit(evt) {
//         evt.preventDefault()
//         const formName = evt.target.name
//         const email = evt.target.email.value
//         const password = evt.target.password.value
//         const isShelter = evt.target.isShelter.value
//         dispatch(auth(email, password, isShelter, formName))
//       }
//     }
//   }

//   export default connect(mapLogin, mapDispatch)(Login)
