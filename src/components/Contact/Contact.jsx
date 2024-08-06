//import React from 'react'

import contactCSS from './Contact.module.css'
import clsx from 'clsx' 

//import { nanoid } from "nanoid";

//className={clsx()}


 const Contact = ({id,name,number,onDeleteContact}) => {
   return (
    <>
         <div key={id} className={clsx(contactCSS['box-style'])}>
            <p>{name}</p>
         <p>{number}</p>
         <button type='button' onClick={() =>onDeleteContact(id)}>❌</button>
         </div>
     
    </>
    
  )  
}

export default Contact
 