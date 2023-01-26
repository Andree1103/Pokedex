import { useState } from 'react'
import InputName from './components/InputName'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Characters from './components/Characters'
import CharacterDetail from './components/CharacterDetail'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<InputName/>}/>

        <Route element={<ProtectedRoutes/>}>
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/characters/:id' element={<CharacterDetail/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
