import { useState } from 'react'
import MarketPage from './pages/MarketPage/MarketPage'
import MainPage from './pages/MainPage/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainPage />
      {/* <MarketPage/> */}
    </>
  )
}

export default App
