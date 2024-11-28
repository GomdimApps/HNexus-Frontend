import './index.css'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function MainInterface() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div className={`fixed inset-y-0 left-0 transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64 p-4`}>
        <ul className="space-y-2">
          <li className="p-2 hover:bg-gray-700 cursor-pointer rounded">Option 1</li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer rounded">Option 2</li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer rounded">Option 3</li>
        </ul>
      </div>
      <div className={`flex-1 transition-all duration-300 ${isNavOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="flex items-center justify-between p-4 bg-blue-600 text-white">
          <button 
            className="p-2 rounded"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          {/* Add other toolbar items here */}
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Welcome to the main interface</h1>
          {/* Add more content here */}
        </div>
      </div>
    </div>
  )
}

export default MainInterface