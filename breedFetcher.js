const request = require('request');

let myArgs = process.argv.slice(2);

let breedName = myArgs[0];

console.log(myArgs);

let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


request(url, (error, response, body) => {
  if (error) {
    return console.log(`Failed to request details error: ${error}`);
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  const breed = data[0];
  if (!breed) {
    console.log(`Failed to find breed: ${breed}`);
  } else {
    console.log(breed.description);
  }
});

