import React, {useEffect} from 'react';

import User from '../../Models/User';

function Home(props:User)
{
    useEffect(() =>{
        document.title = "Home";
    },[]);


    return(
        <div className="container">
            <h1 id="WelcomeHeader">Welcome to our Site, {props.displayName}</h1>
            <hr/>
        </div>
        
    );
}

export default Home;