import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './firstcomponent.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1>This is my first repo with react</h1>
    </>
  )
}
export default App;
