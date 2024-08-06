import { useState,useEffect } from 'react'
import './App.css'
import { nanoid } from "nanoid";
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
 
const starterContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const theKey = 'Contacts';

const App = () => {
  //1
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(theKey)) ?? starterContacts
  );
  
  const [filterValue, setFilterValue] = useState('')

  //2
  const handleFilter = (e) => {
    const targetedValue = e.target.value;
    setFilterValue(targetedValue);
  }
  //console.log(filterValue);
  const filteredContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  //3
  const onAddContact = (contact) => {
    const finalContact = {
      ...contact,
      id:nanoid(), 
    }
    setContacts([finalContact, ...contacts])
  }
  //console.log(contacts)

  //4
  const onDeleteContact = (contactId) => {
    //console.log(contactId)
    setContacts(contacts.filter((contact)=>contact.id !== contactId))
  }

  //5
  useEffect(() => {
    window.localStorage.setItem(theKey, JSON.stringify(contacts))
  })
  

 return (
  <div>
  <h1>Phonebook</h1>
     <ContactForm onAddContact={onAddContact} />
     <SearchBox filterValue={filterValue} handleFilter={handleFilter} />
     <ContactList filteredContacts={filteredContacts} onDeleteContact={onDeleteContact} />
  </div>

 );
};


export default App
