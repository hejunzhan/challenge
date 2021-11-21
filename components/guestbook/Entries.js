import React from 'react'
import { StyledCard } from 'components/utils/card'
import PropTypes from 'prop-types'

const _renderEntries = entries => {
  if (Object.keys(entries).length > 0) {
    return (
      <div>
        {entries.map(entry => (
          <StyledCard
            guestMessage={entry.guestMessage}
            guestName={entry.guestName}
          />
        ))}
      </div>
    )
  }

  return <StyledCard id={1} guestMessage='No one.' guestName=':(' />
}
const Entries = props => _renderEntries(props.entries)

Entries.propTypes = {
  entries: PropTypes.array.isRequired
}

export default Entries
