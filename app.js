const paragraph = document.querySelector('#words');
const wordList = `Tonx fanny pack Tumblr polaroid trust fund art party chambray beard Bushwick Truffaut tote bag flexitarian distillery farm-to-table freegan photo booth letterpress gastropub DIY Williamsburg banh mi Pinterest four loko Kickstarter synth raw denim YOLO master cleanse 8-bit wayfarers brunch Echo Park whatever Blue Bottle street art crucifix VHS viral kale chips dreamcatcher mlkshk lo-fi pork belly Brooklyn messenger bag tattooed bitters bicycle rights sriracha meggings try-hard tofu swag McSweeney's hashtag bespoke sartorial Helvetica fingerstache mustache kitsch keytar Cosby sweater Neutra biodiesel typewriter Pitchfork yr organic jean shorts ethical craft beer next level chia meh plaid cray forage quinoa post-ironic kogi ennui cred scenester pour-over hella chillwave heirloom aesthetic mixtape literally fap vegan readymade vinyl tousled Shoreditch artisan leggings single-origin coffee you probably haven't heard of them Carles skateboard disrupt seitan PBR&B XOXO direct trade  cliche butcher High Life Godard normcore twee food truck Odd Future lomo gluten-free slow-carb flannel Portland paleo pug Austin American Apparel gentrify pop-up actually put a bird on it Thundercats shabby chic mumblecore sustainable banjo ugh Intelligentsia 3 wolf moon roof party occupy Wes Anderson drinking vinegar squid authentic +1 Schlitz small batch asymmetrical deep v locavore stumptown umami semiotics retro hoodie cardigan 90's Marfa fashion axe iPhone church-key cornhole irony keffiyeh selvage Banksy wolf selfies Etsy narwhal salvia PBR fixie before they sold out blog Vice pickled`.split(' ');
//wraps each string in <span>
const spans = wordList.map(word => {       //map says "for each item do this (function)""
    const span = document.createElement('span');
    span.textContent = word;
    return span;
});
const startBtn = document.querySelector('#start-btn');
const answer = findLongestWord(wordList);
let loserAlert; 

//add click event to all the spans that now wrap each individual string
//also adds spaces between the span elements
spans.forEach(span => {
    const spaceSpan = document.createElement('span');
    spaceSpan.textContent= ' ';
    paragraph.appendChild(spaceSpan);
    span.addEventListener('click', wordSelect);
    paragraph.appendChild(span);
});

//wordselect
function wordSelect(e) {
    // console.log(e.target.textContent);
    const selection = e.target.textContent;
    console.log(selection);
}

//Activates timer
startBtn.addEventListener('click', startGame);

//gaurd to protect mutliple timer sets
 function startGame() {
    if (!loserAlert) {
    loserAlert = window.setTimeout(showAlert, 6000);
    }
}

//finds longest word
function findLongestWord(stuff) {
    const longestWord = stuff.sort(function(a, b) { 
        console.log("I'm walkin' here!");
        return b.length - a.length; 
    });
        return longestWord[0];
  }

//declares the answer
function endOfGame() {
    if (selection === answer) {
        //stop loser alert
        alert('You got it!');
    }
    selection.addEventListener('click', endOfGame);
}


//inject words into HTML


//alert to display if you lose
  function showAlert() {
      alert('Sucks to suck!');
  }

// Need to run something to stop lose alert and show winning alert
//Show how long it took