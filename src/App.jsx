import './App.css'
import Header from './components/header/header'
import { RouterProvider } from 'react-router'
import { Router } from './routes'

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={Router} />
    </>
  )
}

export default App
