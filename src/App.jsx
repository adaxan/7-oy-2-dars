import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import Photos from './pages/Photos'
import Counterr from './pages/Counterr'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<MainLayout><Home></Home></MainLayout>} />
        <Route path='/form' element={<MainLayout><Form></Form></MainLayout>} />
        <Route path='/photos' element={<MainLayout><Photos></Photos></MainLayout>} />
        <Route path='/counter' element={<MainLayout><Counterr></Counterr></MainLayout>} />
      </Routes>
    </div>
  )
}

export default App;
