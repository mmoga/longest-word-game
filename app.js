const paragraph = document.querySelector('#words').innerHTML;

function findLongestWord(str) {
    const longestWord = str.split(' ').sort(function(a, b) { 
        console.log("I'm walkin' here!");
        return b.length - a.length; 
    });
        return longestWord[0].length;
  }
  findLongestWord(paragraph);

  