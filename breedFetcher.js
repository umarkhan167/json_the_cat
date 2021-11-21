const request = require('request');

// let myArgs = process.argv.slice(2);

// let breedName = myArgs[0];

// console.log(myArgs);

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    // console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
    const data = JSON.parse(body);
    if (!data[0]) {
      callback(`${breedName} breed not found`, null);
    } else {
      callback(null, data[0].description);
    }
  });
};


module.exports = { fetchBreedDescription };