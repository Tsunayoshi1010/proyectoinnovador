
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'

function App() {


  return (
    <div className='container'>
    <header>
      <h1>Proyecto Innovador</h1>
      <NavBar/>
    </header>
     
     <main>
      <Outlet/>
     </main>

    <footer>
      <Footer />
    </footer>
     
    </div>
  )
}

export default App
