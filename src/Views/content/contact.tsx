import React, { useEffect } from 'react';

function Contact()
{
    useEffect(() =>{
        document.title = "Contact";
    },[]);
    
    return(
        <div className="container">
            <h1>Contact Us</h1>
            <hr/>
        </div>
    );
}

export default Contact;