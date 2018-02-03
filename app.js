const paragraph = document.querySelector('#words');

function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
    console.log("I'm walkin' here!");
  }
  findLongestWord(paragraph);