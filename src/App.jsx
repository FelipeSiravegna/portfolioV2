import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './compontents/Home/Home'
import NavBar from './compontents/NavBar/NavBar'
import About from './compontents/About/About'
import Skills from './compontents/Skills/Skills'
import Projects from './compontents/Projects/Projects'
import Contact from './compontents/Contact/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path={'/'} component={NavBar} />
        <Route exact path={"/"} component={Home} />
        <Route exact path={'/sobreMi'} component={About} />
        <Route exact path={'/conocimientos'} component={Skills} />
        <Route exact path={'/proyectos'} component={Projects} />
        <Route exact path={'/contactame'} component={Contact} />
      </div>
    </BrowserRouter>
  )
}
