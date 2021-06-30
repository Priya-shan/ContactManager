import React from "react";
import user from "../images/user.png";

const ContactCard=(props)=>{
    const{id,name,number}=props.contact;
return(
    <div className="item">
        <img className="ui avatar image" src={user} alt="user"/>
        <div className="content">
            <div className="header">{name}</div>
            <div>{number}</div>
        </div>
        <i className="trash alternate outline icon" 
                style={{color:"red",marginTop:"100px"}}>
        </i>
    </div>
);
};

export default ContactCard;