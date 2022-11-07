import React, { ChangeEvent, useEffect, useState } from 'react';

function Contact()
{
    const [fullName, setFullName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() =>{
        document.title = "Contact";
    },[]);

    function onChangeFullName(e: ChangeEvent<HTMLInputElement>)
    {
        console.log(fullName);
    }

    function onChangeContactNumber(e: ChangeEvent<HTMLInputElement>)
    {
        console.log(contactNumber);
    }

    function onChangeEmailAddress(e: ChangeEvent<HTMLInputElement>)
    {
        console.log(emailAddress);
    }

    function onChangeMessage(e: ChangeEvent<HTMLTextAreaElement>)
    {
        console.log(message);
    }

    return(
        <div className="container">
            <h1>Contact Us</h1>
            <hr/>

            <div className="row justify-content-lg-center g-3">
                <form className="col-lg-8 col-md-6 col-sm-10">


                    <div className="form-group mb-3">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" className="form-control" id="fullName" name="fullName" onChange={onChangeFullName} 
                        aria-describedby="Full Name Input" placeholder="Enter Your Full Name" required/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input type="tel" className="form-control" id="contactNumber" name="contactNumber" onChange={onChangeContactNumber} 
                        aria-describedby="Contact Number Input" placeholder="Enter Your Contact Number" required/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="emailAddress">Email address</label>
                        <input type="email" className="form-control" id="emailAddress" name="emailAddress" onChange={onChangeEmailAddress} 
                        aria-describedby="Email Address Input" placeholder="Enter Your Email Address" required/>
                    </div>
                    
                    <div className="form-group mb-3">
                        <label htmlFor="message">Your Message</label>
                        <textarea className="form-control" id="message" name="message"aria-label="Message Area" onChange={onChangeMessage}></textarea>
                    </div>

                    <button type="submit" id="submitButton" className="btn btn-primary me-2"><i className="fas fa-envelope fa-lg"></i> Submit</button>
                    <button type="reset" id="cancelButton" className="btn btn-warning"><i className="fas fa-undo fa-lg"></i> Cancel</button>
                </form>
            </div>

            
        </div>
    );
}

export default Contact;