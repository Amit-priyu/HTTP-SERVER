import { useState } from 'preact/hooks'

import './app.css'

export function App() {
// things  to understand. flex,grid,
// font size background/font colors..
// concept of border radius,
// vanilla to tailwind..
  return (
    <>
     <div className='grid grid-cols-1 md:grid-cols-4'>
        <div className='bg-red-500'>Hi There</div>
        <div className='bg-green-500'>Hi There</div>
        <div className='bg-yellow-500'>Hi There</div>
        <div className='bg-red-500'>Hi There</div>
     </div>
    </>
  )
}
export default App;