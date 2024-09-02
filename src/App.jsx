import { useEffect, useState ,useRef } from 'react'
import './App.css'
import format from './utils/format';

function App() {
  const [time , setTime] = useState(0);
  const [ticking , setTicking] = useState(false);
  const interval = useRef();

  useEffect(() => {
     if(ticking) {
      interval.current = setInterval(() => {
        setTime((t) => t+1);
      },1);
  
      return () => {
        clearInterval(interval);
      }
     }
     else{
      interval.current && clearInterval(interval.current);
     }
  },[ticking])


  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen'>
          <span className='absolute top-28 text-9xl text-whtie font-extrabold'>StopWatch</span>
        <div className='flex flex-col justify-center items-center gap-8 w-56 h-56 bg-blue-800 rounded-md'>
          <div className='flex w-40 p-4 bg-white rounded-md text-black text-3xl'>{format(time)}</div>
          <button 
            className='w-36 h-10 bg-blue-950 border-2 border-black rounded-md text-white text-lg font-semibold'
           onClick={() => setTicking((c) => !c )}
          >
           {time === 0 ? 'Start' : ticking ? "Pause" : "Resume"}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
