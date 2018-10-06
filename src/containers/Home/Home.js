import React, { Component } from 'react'
import logo from '../../assets/tenor.gif'
import {Container} from '../../theme/grid'
import {yellow} from '../../theme/variables'


import {
  Image,
  HeroImage,
  RevealP,
  Background
} from './Home.style'
import WhenInView from '../../components/WhenInView'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
    <div style = {{backgroundColor: yellow}}>
      


      <div>
        <Container>
           
          <HeroImage>
            <h1>Michael  Han</h1>
            <h1>2B ECE at University of Waterloo</h1>
          </HeroImage>
          
          
          {/* <Image src={logo} alt ="tenor.image" /> */}
          <br/>
          <WhenInView>
            {({isInView}) =>          
              <a hide={!isInView}>
              I am a University of Waterloo student studying Electrical Engineering in 2B. I am interested in developing a wide range of skills in diverse fields that would complement each other in unexpected ways. So I engrained this idea to my lifestyle, and created a goal of learning one new thing in depth every trimester. Currently I am most experienced in C++ and Java, and have worked on web applications during my internship at Toronto Water. 

              
              </a>
              
            }  
          </WhenInView>


          {/* <h1><Link to="/projects">Projects</Link></h1>
          <h1><Link to="/resume">Resume</Link></h1>
          <h1><Link to="/about">About</Link></h1> */}
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </Container>
      </div>
    </div> 
    )
  }
}
