const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback(error, "Breed name is either not in the system, or doesn't exist. Try a different breed");
    }
  });
};

module.exports = {
  fetchBreedDescription
};