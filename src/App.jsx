import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
      <div className='container' style={{
        width:'100%',
        height:'100vh', 
        backgroundColor:color
        }}>
          <div className='bar-container'> 
        <div className='bar'>
          <button onClick={()=>setColor('red')} className='button' style={{backgroundColor:'red'}}>Red</button>
          <button onClick={()=>setColor('blue')} className='button' style={{backgroundColor:'blue'}}>Blue</button>
          <button onClick={()=>setColor('yellow')} className='button' style={{backgroundColor:'yellow'}}>Yellow</button>
          <button onClick={()=>setColor('green')} className='button' style={{backgroundColor:'green'}}>Green</button>
          <button onClick={()=>setColor('black')} className='button' style={{backgroundColor:'black'}}>Black</button>
        </div>
          </div>
      </div>
  )
}

export default App
