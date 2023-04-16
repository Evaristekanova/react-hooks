import React from 'react'

const Squares = ({colorValue}) => {
  return (
      <section className='square' style={{backgroundColor:colorValue}}>
          {colorValue ? colorValue : "Empty value"}
    </section>
  )
}

Squares.defaultProps = {
    colorValue : "Enter color value"
}

export default Squares