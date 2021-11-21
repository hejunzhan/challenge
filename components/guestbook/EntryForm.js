import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Notify from 'components/utils/Notify'

class EntryForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      guestName: '',
      guestMessage: '',
      validResponse: true,
      validForm: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  async handleSubmit (event) {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      this.setState({
        validForm: false
      })
      return
    }

    const entry = JSON.stringify({
      guestName: this.state.guestName,
      guestMessage: this.state.guestMessage
    })

    this.setState({
      validForm: true,
      validResponse: true
    })

    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: entry
      })

      if (!response.ok) {
        this.setState({
          validResponse: false
        })

        return
      }

      if (response.ok) {
        this.setState({
          entry,
          guestName: '',
          guestMessage: ''
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { entry, validForm, validResponse } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <FormControl component='fieldset' className='entryForm_formControl'>
            <TextField
              margin='normal'
              inputProps={{ maxLength: 29 }}
              label='Name'
              type='text'
              id='guestName'
              name='guestName'
              value={this.state.guestName}
              onChange={this.handleInputChange}
              variant='outlined'
            />

            <TextField
              margin='normal'
              multiline
              rows={9}
              inputProps={{ maxLength: 120 }}
              label='Message'
              id='guestMessage'
              name='guestMessage'
              value={this.state.guestMessage}
              onChange={this.handleInputChange}
              variant='outlined'
            />
            <Button
              style={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                border: 0,
                borderRadius: 3,
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                color: 'white',
                height: 48,
                padding: '0 30px'
              }}
              variant='contained'
              color='secondry'
              type='submit'
            >
              Submit
            </Button>
          </FormControl>
        </form>

        <div>
          {!validResponse && (
            <Notify
              title='Internal Error!'
              text='Form failed to post the guest book message'
            />
          )}
          {!validForm && (
            <Notify title='Error!' text='Invalid Form Information' />
          )}
          {validForm && entry && (
            <Notify title='Success!' text='Message Posted!' />
          )}
        </div>
      </div>
    )
  }
}

export default EntryForm
