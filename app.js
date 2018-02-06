const paragraph = document.querySelector('#words');
//wraps each string in <span>
const wordList = `Tonx fanny pack Tumblr polaroid trust fund art party chambray beard Bushwick Truffaut tote bag flexitarian distillery farm-to-table freegan photo booth letterpress gastropub DIY Williamsburg banh mi Pinterest four loko Kickstarter synth raw denim YOLO master cleanse 8-bit wayfarers brunch Echo Park whatever Blue Bottle street art crucifix VHS viral kale chips dreamcatcher mlkshk lo-fi pork belly Brooklyn messenger bag tattooed bitters bicycle rights sriracha meggings try-hard tofu swag McSweeney's hashtag bespoke sartorial Helvetica fingerstache mustache kitsch keytar Cosby sweater Neutra biodiesel typewriter Pitchfork yr organic jean shorts ethical craft beer next level chia meh plaid cray forage quinoa post-ironic kogi ennui cred scenester pour-over hella chillwave heirloom aesthetic mixtape literally fap vegan readymade vinyl tousled Shoreditch artisan leggings single-origin coffee you probably haven't heard of them Carles skateboard disrupt seitan PBR&B XOXO direct trade  cliche butcher High Life Godard normcore twee food truck Odd Future lomo gluten-free slow-carb flannel Portland paleo pug Austin American Apparel gentrify pop-up actually put a bird on it Thundercats shabby chic mumblecore sustainable banjo ugh Intelligentsia 3 wolf moon roof party occupy Wes Anderson drinking vinegar squid authentic +1 Schlitz small batch asymmetrical deep v locavore stumptown umami semiotics retro hoodie cardigan 90's Marfa fashion axe iPhone church-key cornhole irony keffiyeh selvage Banksy wolf selfies Etsy narwhal salvia PBR fixie before they sold out blog Vice pickled`.split(' ');
//map says "for each item do this (function)"
const spans = wordList.map(word => {       
    const span = document.createElement('span');
    span.textContent = word;
    return span;
});
const startBtn = document.querySelector('#start-btn');
const answer = findLongestWord(wordList);
let loserAlert; 
let winnerAlert;
let timeLeft = 6;
let countdown;
let isRunning = false;


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
    //make it so you can win
    if (selection === answer && timeLeft > 0 && isRunning) {
        clearInterval(loserAlert);
        alert('You win!');
        timeLeft = 6;
    }
}

//Activates timer
startBtn.addEventListener('click', startGame);


//gaurd to protect multiple timer sets
 function startGame(e) {
    if (!loserAlert) {
    loserAlert = window.setInterval(ticker, 1000);
    } 
    if (!isRunning) {
        isRunning = true;
        console.log(isRunning);
    }
}

//Display countdown
function ticker() {
    timeLeft -= 1;
    document.getElementById("countdown").textContent = timeLeft;
    if(timeLeft <= 0 && isRunning) {
        clearInterval(loserAlert);
        alert('Sucks to suck!');
        isRunning = false;
    } 
}

//finds longest word
function findLongestWord(stuff) {
    const longestWord = stuff.sort(function(a, b) { 
        return b.length - a.length; 
    });
        return longestWord[0];
  }


// Need to run something to stop lose alert and show winning alert
//Show how long it took