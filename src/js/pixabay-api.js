'use strict';

import axios, { Axios } from 'axios';

const API_KEY = '43829515-4b6c46a8dcc04df5ffee337c5';

export async function getRequest(q, per_page, page) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page,
    page,
  });

  axios.defaults.baseURL = `https://pixabay.com/api/`;

  return await axios(`?${searchParams}`);
}
