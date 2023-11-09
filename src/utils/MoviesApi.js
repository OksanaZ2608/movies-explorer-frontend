import { MOVIES_URL } from "../constants/constants";
class MoviesApi {
    constructor(options) {
        this._url = options.baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    _request(url, options) {
        return fetch(`${this._url}${url}`, options)
            .then(this._checkResponse)
    }
    
    getMovies() {
        return this._request('/')
    }
}

const moviesApi = new MoviesApi({
    baseUrl: `${MOVIES_URL}`,
})

export default moviesApi;