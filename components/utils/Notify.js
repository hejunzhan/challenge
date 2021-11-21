import React from 'react'
import PropTypes from 'prop-types'

const Notify = props => (
  <div>
    <h3>{props.title}</h3>
    <pre>{props.text}</pre>
  </div>
)

Notify.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Notify
