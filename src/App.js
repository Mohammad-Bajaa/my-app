import logo from './logo.svg';
import Navbar from './components/Navbar';
import Main from './components/Main';
import BusinessCard from './components/BusinessCard';
import Airbnb from './components/Airbnb';
import boxes from './boxes';
import React from 'react';
import Box from './box';

function App() {
  // const [squares, setSquares] = React.useState(boxes)

  
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

  return(
    // <div className='container'>
    //   <MemeGenerator/>
    // </div>
    // <main>
    //   {squareElements}
    // </main>
    <h1> You have _ unread messages</h1>
  );
}

export default App;
