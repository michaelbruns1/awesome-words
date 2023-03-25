const awesomeWords = require('awesome-words').default;

const filtered = awesomeWords('The new Apple Macbook Pro will have a touchbar',
  ['pro', 'touchbar'])

console.log(filtered)
