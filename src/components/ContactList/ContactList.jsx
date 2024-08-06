//import React from 'react'
import Contact from "../Contact/Contact"
import clsx from 'clsx' 
import contactListStyle from './ContactList.module.css' 

const ContactList = ({filteredContacts,onDeleteContact}) => {
  return (
    <>
      <ul className={clsx(contactListStyle['box-style'])}>
        {filteredContacts.map(contactItem => (
          <li key={contactItem.id} >
            <Contact id={contactItem.id} name={contactItem.name} number={contactItem.number} onDeleteContact={onDeleteContact} />
          </li>
        ))}
      </ul>
      
      </>
  )
}

export default ContactList
