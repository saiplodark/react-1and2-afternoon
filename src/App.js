import React, { Component } from 'react';
import logo from './logo.svg';
import data from './data'
import Previous from'./components/Previous'
import Next from './components/Next'
import './App.css';

export default class App extends Component{
  constructor(){
    super()

    this.state={
      poeple:data,
      index:0
    }
  }

  render(){
    const nameCard = this.state.poeple.map(element => {
      return <div 
      key={element.id} className='people-container'>
        <header>{element.id}/25</header>
       <h1>{element.name.first} {element.name.last}</h1>
       <h2>From: {element.city}, {element.country}</h2>
       <h3>Job Title: {element.title}</h3>
       <h4>Employer: {element.employer}</h4>
       <h5>Favorite Movies: </h5>
       <ol>
        <li>{element.favoriteMovies[0]}</li>
        <li>{element.favoriteMovies[1]}</li>
        <li>{element.favoriteMovies[2]}</li>
       </ol>
       
       </div>
    })
    
      return (
    <div>{nameCard[this.state.index]}</div>
    )
      }}