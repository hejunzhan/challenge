import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { StyledLink } from 'components/utils/link'

class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.navPosition
    }
  }

  render () {
    const { value } = this.state

    return (
      <div>
        <AppBar
          style={{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px'
          }}
          position='static'
        >
          <Toolbar>
            <Button variant={value === 0 ? 'outlined' : 'text'} color='inherit'>
              <StyledLink href='/'>Register</StyledLink>
            </Button>
            <Button variant={value === 1 ? 'outlined' : 'text'} color='inherit'>
              <StyledLink href='/guestbook'>View</StyledLink>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Navigation.propTypes = {
  navPosition: PropTypes.number.isRequired
}

export default Navigation
