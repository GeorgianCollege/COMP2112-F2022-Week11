import http from './axios-instance';
import TVShow from '../Models/TVShow';

class TVShowListDataService
{
    // create
    public create(id: string, data: TVShow)
    {
        return http.put<any>("/TVShows/" + id + ".json", data);
    }

    // read
    public read()
    {
        return http.get<Array<any>>("TVShows.json");
    }

    // update

    // delete
}

export default new TVShowListDataService();