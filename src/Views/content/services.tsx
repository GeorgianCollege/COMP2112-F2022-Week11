import React from 'react';

function Services()
{
    let services = ["Web Design", "Custom Programming", "Mobile Applications", "Logo Design", "Social Media Marketing"];


    return(
        <div className="container">
            <h1>Our Services</h1>
            <hr/>
            <div className="row">
                <div className="col-6">
                    <ul className="list-group">
                        { services.map((service) => (<li className="list-group-item">{service}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Services;