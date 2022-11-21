import axios from 'axios';

export default axios.create({
    baseURL: "../Data/tvshows.json",
    headers: {
        "Content-type": "application/json"
    }
});