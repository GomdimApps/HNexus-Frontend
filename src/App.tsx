import { useState } from 'react'
import './index.css'

function App() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {isLogin ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
            <input className="w-full p-3 border border-gray-300 rounded-lg" type="text" placeholder="Username" />
            <input className="w-full p-3 border border-gray-300 rounded-lg" type="password" placeholder="Password" />
            <button className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Login</button>
            <p className="text-center text-blue-500 cursor-pointer" onClick={() => setIsLogin(false)}>
              Don't have an account? Create one
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-gray-700">Create Account</h2>
            <input className="w-full p-3 border border-gray-300 rounded-lg" type="text" placeholder="Username" />
            <input className="w-full p-3 border border-gray-300 rounded-lg" type="password" placeholder="Password" />
            <input className="w-full p-3 border border-gray-300 rounded-lg" type="password" placeholder="Confirm Password" />
            <button className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Create Account</button>
            <p className="text-center text-blue-500 cursor-pointer" onClick={() => setIsLogin(true)}>
              Already have an account? Login
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
