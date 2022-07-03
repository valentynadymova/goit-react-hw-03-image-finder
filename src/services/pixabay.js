import PropTypes from "prop-types";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "24557124-39f2c475ddfc51b2a4ee57f05";

const fetchImagesApi = (searchQuery, page) => {
  return fetch(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error("Requested images not found!"));
  });
};

fetchImagesApi.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default fetchImagesApi;
