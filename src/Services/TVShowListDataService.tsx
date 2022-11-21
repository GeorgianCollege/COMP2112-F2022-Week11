import http from './axios-instance';
import TVShow from '../Models/TVShow';

class TVShowListDataService
{
    // create
    public create(data: TVShow)
    {
        return http.post<TVShow>("TVShows.json", data);
    }

    // read
    public read()
    {
        return http.get<Array<TVShow>>("TVShows.json");
    }

    // update

    // delete
}

export default new TVShowListDataService();