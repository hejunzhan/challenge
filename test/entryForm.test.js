import React from 'react'
import expect from 'expect.js'
import { createShallow } from '@material-ui/core/test-utils'
import * as GuestBook from 'components/guestbook'

describe('<GuestBook.EntryForm/>', () => {
  let shallow

  before(() => {
    shallow = createShallow()
  })

  it('Should have form', () => {
    const wrapper = shallow(<GuestBook.EntryForm />)

    expect(wrapper.find('form'))
  })
})
