import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import TVShowListDataService from '../../Services/TVShowListDataService';

import TVShow from '../../Models/TVShow';


function TVShowsList()
{
    const [TVShows, setTVShows] = useState<Array<any>>([]);
    const navigate = useNavigate();

    useEffect(()=>{
        readTVShows();
    }, [setTVShows]);

    function readTVShows()
    {
        TVShowListDataService.read()
        .then((response: any) => {
            //setTVShows(response);
            let TVShowList = [];

            let keys = Object.keys(response.data)
            for (const key of keys) 
            {   
                const data = {
                    id: key,
                    title: response.data[key].title,
                    studio: response.data[key].studio
                }
                TVShowList.push(data);
            }
            console.log(TVShowList);
            setTVShows(TVShowList);
        })
        .catch((e: Error) => {
            console.log(e);
        });
    }

    function InsertDataRows()
    {
        if(TVShows)
        {
            console.log(TVShows);
            for (let index = 0; index < TVShows.length; index++) {
                
                return(
                    <tr key={index}>
                        <th scope="row" className="text-center">{index + 1}</th>
                        <td>{TVShows[index].title}</td>
                        <td>{TVShows[index].studio}</td>
                    </tr>
                );
            }
        }
    }

    return(
        <div className='container'>
            <h1>TV Shows List</h1>
            <div className="row">
                <div className="col">

                    <Link to={"/add"} id="addButton" className="btn btn-primary mb-1"><i className="fa-solid fa-circle-plus"></i> Add TV Show</Link>
                
                    <table className="table table-striped table-bordered table-hover">
                    
                        <thead className="table-dark">
                            <tr>
                                <th scope="col" className='text-center'>#</th>
                                <th scope="col">TV Show</th>
                                <th scope="col">Studio</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* repeatable rows */}
                        {

                            TVShows  &&
                            TVShows.map((tvShow, index)=>{
                                return(
                                    <tr key={index}>
                                    <th scope="row" className="text-center">{index + 1}</th>
                                    <td>{tvShow.title}</td>
                                    <td>{tvShow.studio}</td>
                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                
                </div>
            </div>
        </div>
    )

}

export default TVShowsList;