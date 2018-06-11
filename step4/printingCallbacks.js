var https = require('https');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

var chunkData;

function getHTML (options, callback) {

  https.get(options, function (response) {

  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    chunkData += data;

  });

  response.on('end', function() {
    console.log('Response stream complete.');
    callback(chunkData)
  });

});


}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML)