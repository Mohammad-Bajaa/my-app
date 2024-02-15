import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// // import MemeGenerator from './components/MemeGenerator.js';
import App from './App';
// import MemeGenerator from './components/MemeGenerator';
// import WindowTracker from './components/WindowTracker';

function Index(){
  return(
    <div className='container'>
      <App/>
    </div>
    

  )
}
/*
const page = (
  <div>
    <header>
      <nav>
        <img src = {require("./logo512.png")} width="40px"></img>
      </nav>
  </header>
  <div>
    <h1>Reasons why I'm exceited to learn react!</h1>
    <ol>
    <li> Maintainability</li>
    <li> Reusability</li>
    <li> Modularity</li>
    <li> Scalability</li>
    </ol>
  </div>
  <footer>
    <small>created By Mohammad Ali Hussain Bajaa. All rights reserved</small>
  </footer>
  </div>
)
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />)






/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
