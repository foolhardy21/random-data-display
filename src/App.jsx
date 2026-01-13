import { useState } from 'react'
import DisplayController from './components/DisplayController'
import { randomDataApi } from './services/randomData'

function App() {
  const [currentData, setCurrentData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchRandomData = async () => {
    setLoading(true)
    try {
      const response = await randomDataApi.getRandomData()
      setCurrentData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Data Display Panel</h1>
      <button
        onClick={fetchRandomData}
        disabled={loading}
        className={`cursor-pointer font-bold py-2 px-4 rounded mb-8 ${loading
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-700'
          } text-white`}
      >
        {loading ? 'Loading...' : 'Fetch Random Data'}
      </button>
      <div className="w-full max-w-2xl">
        <DisplayController
          currentData={currentData}
          loading={loading}
        />
      </div>
    </div>
  )
}

export default App
