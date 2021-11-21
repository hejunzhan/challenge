import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { style } from 'components/utils/card/style'

const StyledCard = props => (
  <Card style={style}>
    <CardContent>
      <Typography variant='h5'>{props.guestMessage}</Typography>
      <Typography variant='body1'>{props.guestName}</Typography>
    </CardContent>
  </Card>
)

StyledCard.propTypes = {
  guestName: PropTypes.string.isRequired,
  guestMessage: PropTypes.string.isRequired
}

export default StyledCard
