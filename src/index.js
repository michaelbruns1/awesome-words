export default (content, words) => (
  content.replace(new RegExp(words.join('|'), 'ig'),
    '***'
  ))

//create the module that will filter a sentence and replace the blacklisted words with asterisks
/**  
var filterWords = function(sentence, blackList) {
  var words = sentence.split(" ");
  var filteredWords = [];
  for (var i = 0; i < words.length; i++) {
    if (blackList.indexOf(words[i]) === -1) {
      filteredWords.push(words[i]);
    } else {
      filteredWords.push("***".repeat(words[i].length));
    }
  }
  return filteredWords.join(" ");
};

module.exports = filterWords;
*/