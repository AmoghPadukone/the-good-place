import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './Pages/Auth'
import ProblemList from './Pages/ProblemList'
import QuestionPage from './Pages/QuestionPage'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/problems" element={<ProblemList/>}/>
        <Route path="/problems/:id" element={<QuestionPage/>}/>
      </Routes>
    </>
  )
}

export default App
