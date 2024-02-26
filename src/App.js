// import logo from './logo.svg';
// import Navbar from './components/Navbar';
// import Main from './components/Main';
// import BusinessCard from './components/BusinessCard';
// import Airbnb from './components/Airbnb';
// import boxes from './boxes';
import React from 'react';
// import Box from './box';
// import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar';
// import MemeGenerator from './components/MemeGenerator'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import MyCV from './components/MyCV';
import ContactMe from './components/ContactMe';
// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MyCV from './components/MyCV';

function App() {
  // const [messages, setMessages] = React.useState(["1","2"])
  // const [squares, setSquares] = React.useState(boxes)
  // const [formData, setFormData] = React.useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   comments: "",
  //   isFriendly: true,
  //   employment: "",
  //   favoriteColor: ""
  // })
  const [darkMode, setDarkMode] = React.useState(false)
  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
    console.log(darkMode)
  }
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinNewsLetter: false
  })
  // const squareElements = squares.map(square => (
  //   <Box 
  //     on = {square.on} 
  //     key={square.id}
  //     toggle = {() => toggle(square.id)}
  //     />
  // ))

 

  // function toggle(id){
  //   setSquares(prevSquares => {
  //     return prevSquares.map(square => {
  //               return square.id === id ? {...square, on: !square.on} : square
  //     })
  //   })
  // }


// function handleChange(event){
//   const {name, value, type, checked} = event.target  
//   console.log(checked, value)

//   setFormData(prevData => {
//     return {
//       ...prevData,
//       [name]: type==="checkbox" ? checked : value
//     }
//   })
// }
// function handleSubmit(){
//   // if(document.getElementsByClassName)
// }
  // function handleChange(event){
  //   const {name, value, type, checked} = event.target

  //   setFormData(prevData =>{
  //     return {
  //       ...prevData,
  //       [name]: type==="checkbox" ? checked : value
  //     }
  //   })
  // }
  // function handleSubmit(event){
  //   event.preventDefault()
  //   if(formData.password.length === 0 || formData.confirmPassword.length === 0) console.log("the password section should not be empty!")
  //   if(formData.password.length > 0 && formData.password === formData.confirmPassword){console.log("successfully signed up!") }else console.log("passwords don't match") 

  // }
  return(
    // <div className='container'>
    //   <MemeGenerator/>
    // </div>
    // <main>
    //   {squareElements}
    // </main>
    // <div>
    //   {
    //     messages.length === 0 ? <h1> You are all caught up!</h1> : 
    //     messages.length === 1 ? <h1> You have 1 unread message!</h1> :
    //     <h1> You have {messages.length} unread messages!</h1>
    //   }
    // </div>
  // <form className='main-form'>
  //   <input className='input-text'
  //       type="text"
  //       placeholder='First Name'
  //       onChange={handleChange}
  //       name='firstName'
  //       value={formData.firstName}>
  //   </input>
  //   <input
  //       type="text" className='input-text'
  //       placeholder='Last Name'
  //       onChange={handleChange}
  //       name='lastName'
  //       value={formData.lastName}>
  //   </input>
  //   <input
  //       type="email" className='input-text'
  //       placeholder='email'
  //       onChange={handleChange}
  //       name='email'      
  //       value={formData.email}>
  //   </input>
  //   <textarea className='input-text'
  //       onChange={handleChange}
  //       name='comments'
  //       value={formData.comments}/>
  //   <input
  //     type="submit" className='input-submit'
  //     onClick={handleSubmit}
  //     name='email'>
  //   </input>
  //   <input 
  //     type='checkbox' 
  //     id='isFriendly' 
  //     onChange={handleChange}
  //     checked={formData.isFriendly} 
  //     name="isFriendly"/>
  //   <label htmlFor='isFriendly'>Are you friendly?</label>
  //   <fieldset className='choices'>
  //     <legend>Current employment status</legend>
  //     <input 
  //       type='radio' 
  //       id='unemployed' 
  //       onChange={handleChange}
  //       value="unemployed"
  //       checked={formData.employment==="unemployed"} 
  //       name="employment"/>
  //     <label htmlFor='unemployed'>Unemployed</label>
  //     <br></br>
  //     <input 
  //       type='radio' 
  //       id='part-time' 
  //       onChange={handleChange}
  //       value="part-time"
  //       checked={formData.employment==="part-time"} 
  //       name="employment"/>
  //     <label htmlFor='part-time'>Part-Time</label>
  //     <br></br>
  //     <input 
  //       type='radio' 
  //       id='full-time' 
  //       onChange={handleChange}
  //       value="full-time"
  //       checked={formData.employment==="full-time"} 
  //       name="employment"/>
  //     <label htmlFor='full-time'>Full-Time</label>
  //   </fieldset>
  //   <select  id='full-time' onChange={handleChange} value="favColor" checked={formData.favoriteColor} name="favColor">
  //       <option value="red">Red</option>
  //       <option value="yellow">Yellow</option>
  //       <option value="green">Green</option>
  //       <option value="blue">Blue</option>
  //       <option value="black">Black</option>
  //       <option value="white">White</option>
  //       <option value="purple">Purple</option>
  //       <option value="brown">Brown</option>



  //   </select>
  // </form>
// )}
/*<div className='body'>
  {/* <form className='custom-form' onSubmit={handleSubmit}>
    <input className="input-text" type='email' placeholder='email' onChange={handleChange} name='email' value={formData.email}/>
    <input className="input-text" type='password' placeholder='Password' onChange={handleChange} name='password' value={formData.password}/>
    <input className="input-text" type='password' placeholder='Confirm password' onChange={handleChange} name='confirmPassword' value={formData.confirmPassword}/>
    <div className="check-div"> 
    <input id='check' type='checkbox' onChange={handleChange} name='joinNewsLetter' value={formData.joinNewsLetter}/>
    <label id= 'label' htmlFor='check'> I want to join the newsletter.</label>
    </div>
    <button id="form-button-submit"> Sign Up</button>
  </form> }
</div> */
  <div className='body'>
    <div className='grid-container'>
    <Navbar className="nav-container" darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <div className='main-container'>
    <Routes>
      <Route path='' element={<Main darkMode={darkMode}/>} ></Route>
      <Route path='/components/MyCV' element={<MyCV  darkMode={darkMode} />} ></Route>
      <Route path='/components/ContactMe' element={<ContactMe  darkMode={darkMode} />} ></Route>
      
    </Routes>
    </div>
    <Footer className="footer-container" darkMode={darkMode}/>
    </div>
  </div>

  )};
export default App;

