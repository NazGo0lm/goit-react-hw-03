//import { useState } from 'react'
import './App.css'
import Options from './components/Options/Options';
import Description  from './components/Description/Description';
//import userData from './data/userData.json'
//import friends from './data/friends.json'
//import transactions from './data/transactions.json'
import Feedback from './components/Feedback/Feedback';
import { useEffect, useState } from 'react';
import Notification from './components/Notification/Notification';




const App = () => {
  const [count, setCount] = useState(JSON.parse(window.localStorage.getItem('saved-count'))
    ?? {
      good: 0,
      neutral: 0,
      bad: 0
    }
  
  )      

  useEffect(() => {
    window.localStorage.setItem('saved-count',JSON.stringify(count))
  },[count])


  const updateFeedback = (btnName) => {
    
    setCount({...count, [btnName]:count[btnName] + 1})
  }
   const deleteFeedback = () => {
      return setCount({
        good: 0,
        neutral: 0,
        bad: 0
      })
    
  } 
  
  const totalFeedback = count.good + count.neutral + count.bad;
  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);
  

 return (
  <>
   <Description />
     
     <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} deleteFeedback={deleteFeedback} />
     {totalFeedback !== 0 ? 
        <Feedback  good={count.good} neutral={count.neutral} bad={count.bad} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}  />
       : <Notification>No feedback yet</Notification>
     }
   

  </>
 );
};


export default App
