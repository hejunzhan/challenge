import Link from 'next/link'
import { style } from 'components/utils/link/style'
import React from 'react'

const StyledLink = props => (
  <Link href={props.href}>
    <a style={style}>{props.children}</a>
  </Link>
)

export default StyledLink
