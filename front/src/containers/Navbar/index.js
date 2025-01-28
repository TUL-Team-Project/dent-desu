import React, { Component } from 'react'
import styled from 'styled-components'

const NavbarStyle = styled.div`
  background: transparent;
  width: 100%;
  align: top
`

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" loading="lazy" />
        </a>
      </nav>
    )
  }
}

export default Navbar