const request = require('request');
let breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    throw Error("There's been an error in your search.");
  } else {
    console.log('statusCode:', response && response.statusCode);
  }
  const data = JSON.parse(body);
  // console.log(typeof body);

  console.log(data);
  // console.log(typeof data);

});

