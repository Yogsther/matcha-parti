window.onload = () => {
    populate_party_buttons();
    new_test();
}

var right = 0;
var wrong = 0;
var sound = new Audio();
    sound.src = "sounds/success.mp3";

function populate_party_buttons() {

    PARTIES.forEach(party => {
        document.getElementById("party-buttons").innerHTML += '<img src="img/logo-' + party.toLowerCase() + '-large.jpg" title="' + party + '" class="party-button" alt="Party button" onclick="guess(' + "'" + party + "'" +')">';
    })

}

function guess(p){
    if(p == person.party){
        // Correct answer
        right++;
        sound.play();
    } else {
        wrong++;
    }

    document.getElementById("stats").innerHTML = "(<span style='color:green;'>" + right + "</span>/<span style='color:red;'>" + wrong + "</span>/" + Math.floor((right/(right+wrong))*1000)/10 + "%" + ")"
    
    new_test();

}


function new_test() {

    window.person = LIST[Math.floor(Math.random() * LIST.length)];

    var src = person.src;
    src = src.substr(0, src.indexOf("_")) + "_320.jpg";


    document.getElementById("name").innerText = person.first_name + " " + person.last_name;
    document.getElementById("image").src = src;

}