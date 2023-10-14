import React from 'react'

const HighlightedText = ({text}) => {
  return (
    <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>{text}</span>
  )
}

export default HighlightedText
