// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
// import {auth} from '../store'

// /**
//  * COMPONENT
//  */
// class AuthForm extends Component {
//   //const {name, displayName, handleSubmit, error} = props
//   constructor() {
//     super()
//     this.state = {
//       isChecked: false
//     }
//     this.handleCheckboxClick = this.handleCheckboxClick.bind(this)
//   }
//   handleCheckboxClick() {
//     this.setState({
//       isChecked: !this.state.isChecked
//     })
//   }
//   render() {
//     console.log(this.state.isChecked)
//     if (this.props.name === 'login') {
//       return (
//         <div>
//           <form onSubmit={this.props.handleSubmit} name={this.props.name}>
//             <div>
//               <label htmlFor="email">
//                 <small>Email</small>
//               </label>
//               <input name="email" type="text" />
//             </div>
//             <div>
//               <label htmlFor="password">
//                 <small>Password</small>
//               </label>
//               <input name="password" type="password" />
//             </div>
//             <div>
//               <button type="submit">{this.props.displayName}</button>
//             </div>
//             {this.props.error &&
//               this.props.error.response && (
//                 <div> {this.props.error.response.data} </div>
//               )}
//           </form>
//           <a href="/auth/google">{this.props.displayName} with Google</a>
//         </div>
//       )
//     } else {
//       return (
//         <div>
//           <form onSubmit={this.props.handleSubmit} name={this.props.name}>
//             <div>
//               <label htmlFor="email">
//                 <small>Email</small>
//               </label>
//               <input name="email" type="text" />
//             </div>
//             <div>
//               <label htmlFor="password">
//                 <small>Password</small>
//               </label>
//               <input name="password" type="password" />
//             </div>
//             <div>
//               <input
//                 type="checkbox"
//                 id="isShelter"
//                 value={this.state.isChecked}
//                 name="isShelter"
//                 onClick={this.handleCheckboxClick}
//               />
//               <label htmlFor="isShelter">
//                 Check this box if you are a Dog Shelter
//               </label>
//             </div>
//             <div>
//               <button type="submit">{this.props.displayName}</button>
//             </div>
//             {this.props.error &&
//               this.props.error.response && (
//                 <div> {this.props.error.response.data} </div>
//               )}
//           </form>
//           <a href="/auth/google">{this.props.displayName} with Google</a>
//         </div>
//       )
//     }
//   }
// }

// /**
//  * CONTAINER
//  *   Note that we have two different sets of 'mapStateToProps' functions -
//  *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
//  *   function, and share the same Component. This is a good example of how we
//  *   can stay DRY with interfaces that are very similar to each other!
//  */
// const mapLogin = state => {
//   return {
//     name: 'login',
//     displayName: 'Login',
//     error: state.user.error
//   }
// }

// const mapSignup = state => {
//   return {
//     name: 'signup',
//     displayName: 'Sign Up',
//     error: state.user.error
//   }
// }
// // going to need to implement two separate mapDispatched so that the login form does not have a isShelter
// const mapDispatch = dispatch => {
//   return {
//     handleSubmit(evt) {
//       evt.preventDefault()
//       const formName = evt.target.name
//       const email = evt.target.email.value
//       const password = evt.target.password.value
//       const isShelter = evt.target.isShelter.value
//       dispatch(auth(email, password, isShelter, formName))
//     }
//   }
// }

// export const Login = connect(mapLogin, mapDispatch)(AuthForm)
// export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

// /**
//  * PROP TYPES
//  */
// AuthForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// }
