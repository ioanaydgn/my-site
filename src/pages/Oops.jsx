import React from 'react'

const Oops = () => {
  const date = 'Jul 3 2020';
  return (
    <div>
      <div className='post'>
        <h1 className='post-title'>Oops</h1>
        <span className='post-date'>{date}</span>
        <p>You cannot access this content at this time.</p>
      </div>
    </div>
  )
}

export default Oops