import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const Content = props => (
  <div>
    <Paper>
      <Grid
        container
        wrap='nowrap'
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid item xs={10}>
          {props.children}
        </Grid>
      </Grid>
    </Paper>
  </div>
)

export default Content
