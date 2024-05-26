import './New.scss'
import './Form.scss'
import './Header.scss'
import './Footer.scss'
import './Home.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Form from './components/Form'
import Home from './components/Home'
import NewState from './components/NewState'
import {GlobalProvider} from './context/GlobalState'
import Footer from './components/Footer'

function App() {
  return (
       <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/news' element={<GlobalProvider><NewState /></GlobalProvider>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
