import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {count:0}
//   }

//   render(){
  
//     return(
//       <div>
//         You clicked {this.state.count} times <br/>
//         <button onClick={() => this.setState({count:this.state.count +1})}>
//           Click here
//         </button>
//       </div>
//     )
//   }
// }

// same result with useState

function Example() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    lat:"",
    lon:""
  })
  

  async function getIss(e) {
    e.preventDefault();
    const data = await fetch("https://api.wheretheiss.at/v1/satellites/25544"
    ).then((res) => res.json())
    .then((data) => data)

    setData({lat:data.latitude, lon:data.longitude})
            
            
  }
  
  return (
    <>
    <div>
      {/* <p>You clicked {count} times</p>
      <button onClick = {() => setCount(count + 1)}>
        Click here
      </button> <br /> */}


      <h1>Where is the iss?</h1>
      
      <button className="getiss" onClick={(e) => getIss(e)}>
        Click to find out
      </button>
      <p>longitude: {data.lon}</p>
      <p>latitude: {data.lat}</p>
      
    </div>

    </>
  )
}




export default Example;
