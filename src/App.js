import React, { Component } from 'react';
// import logo from './logo.svg';
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
    this.nextperson = this.nextperson.bind(this)
    this.personbefore = this.personbefore.bind(this)
  }

  nextperson(){
    if (this.state.index >= 24){
      this.setState ({
        index:24
      })
    }else{
    this.setState({
      index:this.state.index+1
      })}
  }

  personbefore(){
    if(this.state.index <= 0){
      this.setState({
        index:0
      })
    }else{
      this.setState({
        index: this.state.index-1
    })}
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
    <div>
      {nameCard[this.state.index]}
      <Previous personbefore = {this.personbefore}/>
      <Next nextperson= {this.nextperson}/>
    </div>
    )
 
      }}