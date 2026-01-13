import { useState } from 'react'
import { sampleData } from './constants'
import DisplayController from './components/DisplayController'

function App() {
  const [currentData, setCurrentData] = useState(null)

  const fetchRandomData = () => {
    const randomIndex = Math.floor(Math.random() * sampleData.length)
    setCurrentData(sampleData[randomIndex])
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Data Display Panel</h1>
      <button
        onClick={fetchRandomData}
        className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
      >
        Fetch Random Data
      </button>
      <div className="w-full max-w-2xl">
        <DisplayController
          currentData={currentData}
        />
      </div>
    </div>
  )
}

export default App
