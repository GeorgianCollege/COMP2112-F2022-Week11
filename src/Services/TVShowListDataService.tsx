import http from './http-common';
import TVShow from '../Models/TVShow';

class TVShowListDataService
{
    // create

    // read
    public read()
    {
        return http.get<Array<TVShow>>("");
    }

    // update

    // delete
}

export default new TVShowListDataService();