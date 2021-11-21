import React from 'react'
import fetch from 'isomorphic-unfetch'
import { fqdn } from 'config'
import * as GuestBook from 'components/guestbook'
import { Page } from 'components/page'

const GuestBookPage = props => (
  <Page navPosition={1}>
    <GuestBook.Entries {...props} />
  </Page>
)

GuestBookPage.getInitialProps = async function () {
  const res = await fetch(`${fqdn}/api/guestbook`)
  const data = await res.json()

  return {
    entries: data.entries
  }
}

export default GuestBookPage
