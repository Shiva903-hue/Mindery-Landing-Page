import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Reports from './Component/Reports';
import PendingApprovle from './Component/PendingApprovle';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Dashboard/>
      <Routes>
        <Route path='/' element={<Reports/>} />
        <Route path='/PendingApprovle' element={<PendingApprovle/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
