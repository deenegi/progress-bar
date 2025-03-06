import { useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'

interface ProgressBarData {
  progress: number;
  id: number;
}

let id = 0;

function App() {
  const [data, setData] = useState<ProgressBarData[]>([])

  const addProgressBar = ():void => {
    setData([...data, {progress: 0, id: id++}]);
  }

  return (
    <>
      <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4'>
          <div>Progress Bar</div>
        </div>
      </nav>
      <main className='max-w-screen-xl mx-auto p-4 mt-20 justify-center flex flex-wrap'>
        <button
        className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
        onClick={addProgressBar}
        >Add Progress Bar</button>

        {data && data.map((item) => (
          <ProgressBar key={item.id} progress={item.progress}/>
        ))}
      </main>
      
    </>
  )
}

export default App
