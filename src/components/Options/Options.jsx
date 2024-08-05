//import React from 'react'

import optionCSS from './Options.module.css'
import clsx from 'clsx'

const Options = ({updateFeedback,totalFeedback,deleteFeedback}) => {
  return (
    
    <div className="">
      <button type="button" onClick={()=> updateFeedback('good')} className={clsx(optionCSS['btnGap'])}>Good</button>
      <button type="button" onClick={() => updateFeedback('neutral')} className={clsx(optionCSS.btnGap)}>Neutral</button>
      <button type="button" onClick={() => updateFeedback('bad')} className={clsx(optionCSS.btnGap)}>Bad</button>
      {totalFeedback !== 0 &&
        <button type="button" onClick={()=> deleteFeedback()} className={clsx(optionCSS['btnGap'])}>Reset</button>}
      
    </div>

   
  )
}

export default Options
