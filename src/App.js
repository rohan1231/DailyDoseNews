import './App.css';
import React, { useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {BrowserRouter as Router, Route,  Routes,} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
const App = (props) => {
  const pageSize = 15;
  //Api Key Use for props .env.local
  const apikey = process.env.REACT_APP_NEWS_API
  // top- Loading Bar Code start
  const [progress, setProgress] = useState(0)
// top- Loading Bar Code end
// Dark and Light Mode start

const [mode, setMode] = useState('light');   // Whether dark mode is enabled or not
 const [btn , setBtn] = useState("Enable Dark Mode")

const toggleMode = () =>{
  // document.body.classList.add('bg-' +cls)
  if(mode === 'light'){
    setMode('dark');  
    document.body.style.backgroundColor = 'black';
    setBtn("Enable Light Mode");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    setBtn("Enable Dark Mode");
  }
 }
    return(
      <Router>
      <div>
        <Navbar mode = {mode} toggleMode={toggleMode} btn={btn} alert = {alert}/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      /> 
          <Routes>
          <Route exact path="/" element= {<News setProgress={setProgress}  pageSize = {pageSize } apikey ={apikey} country = "in" category =""/> } />  
              <Route exact path="/health" element= {<News setProgress={setProgress} key="health" pageSize = {pageSize } apikey ={apikey} country = "in" category ="health"/> } /> 
              <Route exact path="/general"  element= {<News setProgress={setProgress} key="general" pageSize = {pageSize } apikey ={apikey} country = "in" category ="general"/> } /> 
              <Route exact path="/entertainment"  element= {<News setProgress={setProgress} key="entertainment" pageSize = {pageSize } apikey ={apikey} country = "in" category ="entertainment"/> } /> 
              <Route exact path="/technology"  element= {<News setProgress={setProgress} key="technology" pageSize = {pageSize } apikey ={apikey} country = "in" category ="technology"/> } /> 
              <Route exact path="/sports"  element= {<News setProgress={setProgress} key="sports" pageSize = {pageSize } apikey ={apikey} country = "in" category ="sports"/> } /> 
              <Route exact path="/business"  element= {<News  setProgress={setProgress}key="business" pageSize = {pageSize } apikey ={apikey} country = "in" category ="business"/> } /> 
              <Route exact path="/science"  element= {<News setProgress={setProgress} key="science" pageSize = {pageSize } apikey ={apikey} country = "in" category ="science"/> } /> 
           </Routes>
        
      </div>
      </Router>
    )
  }
  export default App