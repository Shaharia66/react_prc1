import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './firstcomponent.jsx'
import Userid ,{ Name,Password,Userkey } from './2ndcom.jsx'
import Dog from './exm1.jsx'
import Practice from './3rdcom.jsx'

function App() {
  const [count, setCount] = useState(0);
  let a=5;
  let b=6;

  return (
    <>
      {/* <Header /> */}
      <h1>This is my first repo with react</h1>
      <h2>here starts a new day</h2>
      {/* <Userid/>
      <Name/>
      <Password/>
      <Userkey/>
      <p>{a+b}</p> */}
      {/* <Dog/> */}
      {/* <Practice/> */}
    </>
  )
}
export default App;

