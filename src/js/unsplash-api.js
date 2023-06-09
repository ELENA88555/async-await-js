'use strict';
import axios from 'axios';

export class UnsplashAPI {
  #BASE_URL = ' https://api.unsplash.com';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  page = 1;
  query = null;

  async fetchPhotos() {
    try {
      return await axios.get(`${this.#BASE_URL}/search/photos`, {
        params: {
          query: this.query,
          page: this.page,
          per_page: 12,
          color: 'black_and_white',
          client_id: this.#API_KEY,
        },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
