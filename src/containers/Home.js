import React, { Component } from 'react'
import logo from '../assets/tenor.gif'
import styled from 'styled-components'
import Container from '../theme/grid/Container'

const Image = styled.img`
    width: 100%;
`;
    

export default class Home extends Component {
  render() {
    return (
      <Container>
        <h1>Michael "Doublelift" Han</h1>
        <Image src={logo} alt ="tenor.image" />

            
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit mauris eget metus pellentesque, et vestibulum neque pulvinar. Aenean posuere sem vehicula risus elementum, a venenatis mauris mollis. Vivamus rhoncus congue lectus, vel mollis metus pulvinar et. Sed sit amet nibh eu lacus condimentum volutpat ac sit amet arcu. Aenean ultrices maximus felis eget commodo. Sed convallis dolor lectus, convallis facilisis eros interdum in. Ut quam lorem, tincidunt nec molestie et, pharetra ut neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

        Cras sit amet libero vitae nibh viverra gravida at non velit. Integer porta eu felis nec vestibulum. Suspendisse nec mauris sit amet sem efficitur auctor id eu dolor. Sed diam arcu, mollis egestas viverra eu, finibus id arcu. Proin mattis eget felis vel mattis. In placerat aliquam augue, in euismod magna malesuada eget. Ut cursus nisl vestibulum lectus sollicitudin, sed lobortis massa dapibus. Aliquam auctor arcu et libero efficitur pellentesque. Nunc a feugiat dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </Container>
    )
  }
}
