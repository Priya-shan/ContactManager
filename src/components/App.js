import React, { useState,useEffect } from "react";
import { uuid } from "uuidv4";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";



function App() {
  const LOCAL_STORAGE_KEY="contact";
const [contact,setContact]=useState([])
const addContactHandler=(contacts)=>{
  console.log(contacts);
  setContact([...contact,{id:uuid(), ...contacts }]);
};

const removeContactHandler = (id) => {
  const newContactList = contact.filter((contacts) => {
    return contacts.id !== id;
  });

  setContact(newContactList);
};
useEffect(()=>{
  const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retriveContacts) {
    setContact(retriveContacts);
  }
},[]);

useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contact));
},[contact]);
  /* const contact=[
    {
      id:"1",
      "name":"priya",
      "number":"9080888421"
    },
    {
      id:"2",
      "name":"sneha",
      "number":"9944499835"
    }
  ]; */

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contact={contact}getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
