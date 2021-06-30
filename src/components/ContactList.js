import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };
    const renderContactList = props.contact.map((contacts)=>{
        return <
        ContactCard contact={contacts} 
        clickHandler={deleteContactHandler}
        key={contacts.id}/> ;
    })
    return(
         
         <div className="ui celled list"
         onClick={()=>props.clickHandler(id)}
         >{renderContactList}</div>
     );
};

export default ContactList;
