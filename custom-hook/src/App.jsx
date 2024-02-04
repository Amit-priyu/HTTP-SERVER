import { useEffect, useState } from 'react'
import axios from 'axios'
import { useIsOnline } from './hooks/useIsOnline';


// defining our own custom hooks.
function useInterval(fn,timeout){
  useEffect(()=>{
    setInterval(()=>{
      fn()
    },timeout)
  },[])
}
function App() {
  const [count,setCount]=useState(0);
  useInterval(()=>{
    setCount(c=>c+1);
  },1000)

  return (
    <>
    Timer is at {count}
    </>
  )

} 

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App