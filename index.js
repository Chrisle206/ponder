var Filter = require('bad-words');
const badWordsArray = require('./seeds/profanities')
  
var filter = new Filter();
  
filter.addWords(...badWordsArray); // Add your own words
  
console.log(filter.clean("Hello, I am not a asshole ******"));
  
var new_filter = new Filter({ placeHolder: 'a' });
  
console.log(new_filter.clean("Hello, I am not a asshole ******"));