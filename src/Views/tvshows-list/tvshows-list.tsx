import React, { useEffect, useState } from 'react'

import TVShowListDataService from '../../Services/TVShowListDataService';

import TVShow from '../../Models/TVShow';

function TVShowsList()
{
    const [TVShows, setTVShows] = useState<Array<TVShow>>([]);

    useEffect(()=>{
        readTVShows();
    }, []);

    function readTVShows()
    {
        TVShowListDataService.read()
        .then((response: any) => {
            console.log(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        });
    }

    return(
        <div></div>
    )

}

export default TVShowsList;