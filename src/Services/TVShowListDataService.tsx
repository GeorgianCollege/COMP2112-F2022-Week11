import http from './axios-instance';
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