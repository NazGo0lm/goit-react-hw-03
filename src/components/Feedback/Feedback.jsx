//import React from 'react'

//import { useState } from "react"

const Feedback = ( {good,neutral,bad,positiveFeedback,totalFeedback} ) => {
  


  return (
    
    <div >
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        
      { totalFeedback ?
        <p>Total: {totalFeedback}</p> : ''}
      { positiveFeedback ?
        <p>Positive: {positiveFeedback}%</p> : ''}
      
    </div>
  )
}

export default Feedback
