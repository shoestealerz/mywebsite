import React, { Component } from 'react'
import {CrossImage} from '../Home.style'
import asteroid from '../../../assets/asteroidsgame.gif'
import music from '../../../assets/mymusiclyrics.gif'
import shopping from '../../../assets/shoppinglist.gif'
import {Image} from './Project.style'
import {Relative,Container, ProjectContainer} from '../../../theme/grid'
import {yellow} from '../../../theme/variables'

class Project extends Component {
  render() {
    return (
      <div  style = {{backgroundColor: yellow}}>
        
        <CrossImage>this is the Projects page</CrossImage>
        
        <ProjectContainer>
          <Relative>
            <h1>Ever wanted to watch a gif of an arcade game on some guy's website? Now you can!
              <br/>
              <a href="https://github.com/shoestealerz/p5.js-Asteroids-game">Asteroids Game!</a> 
              using p5.js
            </h1>
            <Image src={asteroid}/>
          </Relative>  
        </ProjectContainer>

        <ProjectContainer>
            <h1><a href="">MyMusicLyrics</a> tells you the lyrics of the songs you like!</h1>
            <Image src={music}/>
        </ProjectContainer>

        <ProjectContainer>
          <Relative>
            <h1><a href="https://github.com/shoestealerz/Shopping-List-app">WhateverList!</a> A server based list of items you can update anywhere!</h1>
            <Image src={shopping}/>
          </Relative>
        </ProjectContainer>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      
    )
  }
}
export default Project;