const https = require('https');

const options = {
  hostname: 's.jina.ai',
  path: '/Best%20smartphones%20under%2050k?',
  headers: {
    'Authorization': 'jina_820828bc4e66482a86bf348d0bdacea9YGDsy3kuRBmfJAS1qRkc9UQTGJoZ',
    'X-Retain-Images': '.png'
  }
};

https.get(options, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    console.log(data);
  });
}).on('error', (error) => {
  console.error(error);
});
