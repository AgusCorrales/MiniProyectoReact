import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Home from './components/Home'
import NewState from './components/NewState'

function App() {
  return (
    <BrowserRouter>
       <Header/>
       <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/form' element = {<Form/>}/>
          <Route path='/news' element = {<NewState/>}/>
       </Routes>  
    </BrowserRouter>
  )
    
}

export default App
