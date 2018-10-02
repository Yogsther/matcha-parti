var classes = document.getElementsByClassName("fellow-item");
var final = [];


for(el of classes){

    var nameAndParty = el.children[0].children[3].innerText;
    var fullName = nameAndParty.substr(0, nameAndParty.lastIndexOf(" ")).split(", ");

    var party = nameAndParty.substr(nameAndParty.indexOf("(")+1)
	party = party.substr(0, party.indexOf(")"))

    final.push({
        src: el.children[0].children[0].src,
        first_name: fullName[1],
        last_name: fullName[0],
        party: party
    });
    
}

console.log(final);