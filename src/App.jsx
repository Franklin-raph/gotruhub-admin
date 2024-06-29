import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import ManageUsers from './pages/manage-users/ManageUsers'
import Features from './pages/features/Features'
import ContractPlan from './pages/contract-plan/ContractPlan'
import CreateSub from './pages/create-sub/CreateSub'
import Settings from './pages/settings/Settings'
import Subscription from './pages/subscription/Subscription'

function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/features" element={<Features />} />
        <Route path="/create-sub" element={<CreateSub />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/contract-plan" element={<ContractPlan />} />
      </Routes>
    </HashRouter>
  )
}

export default App
