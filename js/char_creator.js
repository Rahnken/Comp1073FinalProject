/*
Main Author:  Stephanie Holly Bedard, 200443133
*/
//creates the initial page configurations
function startup() {

    //get values for the Race dropdown
    var racesArray;
    fetch('https://www.dnd5eapi.co/api/races')
        .then(res => res.json())
        .then(data => racesArray = data.results)
        .then(() => racesArray.forEach(function(race){createDropdown(race,'race_input')}))

    //get values for the Gender dropdown
    const gendersArray = [{name:"Female"},{name: "Male"}];
    gendersArray.forEach(function(gender){createDropdown(gender,'gender_input')})

    //get values for the Class dropdown
    var classesArray;
    fetch('https://www.dnd5eapi.co/api/classes')
        .then(res => res.json())
        .then(data => classesArray = data.results)
        .then(() => classesArray.forEach(function(charClass){createDropdown(charClass,'class_input')}))

    //get values for Background dropdown
    var backgroundsArray;
    fetch("../json/backgrounds.json")
        .then(res => res.json())
        .then(data => backgroundsArray = data.backgrounds)
        .then(() => backgroundsArray.forEach(function(background){createDropdown(background,'background_input')}))

}

//this creates the options for the input selection dropdown
function createDropdown(item, input){
    const option = document.createElement("option");
    option.textContent = item.name;
    document.getElementById(input).appendChild(option);
}

function randomSelector(input, output){
    //stop page from autosubmitting
    stopSubmit();

    //get the dropdown
    var dropDown = document.getElementById(input);

    //get possible races from dropdown
    var choices = dropDown.options;

    //remove the Choose option from the choices
    if (choices[0].text.startsWith("Choose")) {
        choices.remove(0);
    }

    //randomly get number for determining the index from the dropdown array
    let choiceSelector = Math.floor(Math.random() * choices.length);

    //randomly selecting a race from the race array
    let randomSelection = choices[choiceSelector].text;

    //set the randomized option as the option selected in the dropdown and output result
    //dropDown.selectedIndex = choiceSelector;
    dropDown[choiceSelector].selected=true;
    document.getElementById(output).value=randomSelection;
}

//this function outputs the result to the result box
function fillResult(input, output){
    var dropDown = document.getElementById(input);
    var result = dropDown.options[dropDown.selectedIndex].text;
    document.getElementById(output).value=result;
}

//generates a random name, depending on the preselected race and gender of character
function generateName(){

    //stop form from submitting
    stopSubmit();

    //Arrays of possible names, depending on gender and race:

    //DRAGONBORN NAMES
    //female
    const femDB = ["Akra", "Biri", "Daar", "Farideh", "Harann", "Havilar", "Jheri", "Kava", "Korinn", "Mishann", "Nala", "Perra", "Raiann", "Sora", "Surina", "Thava", "Uadjit"];
    //male
    const maleDB = ["Arjhan", "Balasar", "Bharash", "Donaar", "Ghesh", "Heskan", "Kriv", "Medrash", "Mehen", "Nadarr", "Pandjed", "Patrin", "Rhogar", "Shamash", "Shedinn", "Tarhun", "Torinn"];
    //surname
    const surDB = ["Clethtinthiallor", "Daardendrian", "Delmirev", "Drachedandion", "Fenkenkabradon", "Kepeshkmolik", "Kerrhylon", "Kimbatuul", "Linxakasendalor", "Myastan", "Nemmonis", "Norixius", "Ophinshtalajiir", "Prexijandilin", "Shestendeliath", "Turnuroth", "Verthisathurgiesh", "Yarjerit"];

    //DWARF NAMES
    //female
    const femDW = ["Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra"];
    //male
    const maleDW = ["Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal"];
    //surname
    const surDW = ["Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart"];

    //ELF NAMES
    //female
    const femE = ["Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"];
    //male
    const maleE = ["Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis"];
    //surname
    const surE = ["Amakiir (Gemflower)", "Amastacia (Starflower)", "Galanodel (Moonwhisper)", "Holimion (Diamonddew)", "Ilphelkiir (Gemblossom)", "Liadon (Silverfrond)", "Meliamne (Oakenheel)", "Naïlo (Nightbreeze)", "Siannodel (Moonbrook)", "Xiloscient (Goldpetal)"];

    //GNOME NAMES
    //female
    const femG = ["Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell", "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Mardnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil", "Tana", "Waywocket", "Zanna"];
    //male
    const maleG = ["Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook"];
    //surname
    const surG = ["Beren", "Daergel", "Folkor", "Garrick", "Nackle", "Murnig", "Ningel", "Raulnor", "Scheppen", "Timbers", "Turen"];

    //HUMAN NAMES
    //female
    const femH = ["Amafrey", "Betha", "Cefrey", "Kethra", "Mara", "Olga", "Silifrey", "Westra"];
    //male
    const maleH = ["Ander", "Blath", "Bran", "Frath", "Geth", "Lander", "Luth", "Malcer", "Stor", "Taman", "Urth"];
    //surname
    const surH = ["Brightwood", "Helder", "Hornraven", "Lackman", "Stormwind", "Windrivver"];

    //TIEFLING NAMES
    //female
    const femT = ["Akta", "Anakis", "Bryseis", "Criella", "Damaia", "Ea", "Kallista", "Lerissa", "Makaria", "Nemeia", "Orianna", "Phelaia", "Rieta", "Art", "Carrion", "Chant", "Creed", "Despair", "Excellence", "Fear", "Glory", "Hope"];
    //male
    const maleT = ["Akmenos", "Amnon", "Barakas", "Damakos", "Ekemon", "Iados", "Kairon", "Leucis", "Melech", "Mordai", "Morthos", "Pelaios", "Skamos", "Therai", "Ideal", "Music", "Nowhere", "Open", "Poetry", "Quest", "Random", "Reverence", "Sorrow", "Temerity", "Torment", "Weary"];
    //surname
    const surT = [];

    //HALF-ORC NAMES
    //female
    const femHO = ["Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Sutha", "Vola", "Volen", "Yevelda"];
    //male
    const maleHO = ["Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Mhurren", "Ront", "Shump", "Thokk"];
    //surname
    const surHO = [];

    //HALF-ELF NAMES
    //female
    const femHE = ["Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia","Amafrey", "Betha", "Cefrey", "Kethra", "Mara", "Olga", "Silifrey", "Westra"];
    //male
    const maleHE = ["Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis","Ander", "Blath", "Bran", "Frath", "Geth", "Lander", "Luth", "Malcer", "Stor", "Taman", "Urth"];
    //surname
    const surHE = ["Amakiir (Gemflower)", "Amastacia (Starflower)", "Galanodel (Moonwhisper)", "Holimion (Diamonddew)", "Ilphelkiir (Gemblossom)", "Liadon (Silverfrond)", "Meliamne (Oakenheel)", "Naïlo (Nightbreeze)", "Siannodel (Moonbrook)", "Xiloscient (Goldpetal)","Brightwood", "Helder", "Hornraven", "Lackman", "Stormwind", "Windrivver"];


    //get the gender
    var gender = document.getElementById('gender_result').value;

    //get the race
    var race = document.getElementById('race_result').value;

    if (race == "" || gender == ""){
        alert("You must first select Gender and Race.");
    }

    //get which name arrays to use:

    if (race.toLowerCase() == "dragonborn"){
        if (gender.toLowerCase() == "male"){
            var firstName = maleDB;
        }
        else var firstName = femDB;
        var surname = surDB;
    }
    else if (race.toLowerCase() == "dwarf"){
        if (gender.toLowerCase() == "male"){
            var firstName = maleDW;
        } else var firstName = femDW;
        var surname = surDW;
    }
    else if (race.toLowerCase() == "elf"){
        if (gender.toLowerCase() == "male"){
            var firstName = maleE;
        } else var firstName = femE;
        var surname = surE;
    }
    else if (race.toLowerCase() == "gnome"){
        if (gender.toLowerCase() == "male"){
            var firstName = maleG;
        } else var firstName = femG;
        var surname = surG;
    }
    else if (race.toLowerCase() == "human"){
        if (gender.toLowerCase() == "male"){
            var firstName = maleH;
        } else var firstName = femH;
        var surname = surH;
    }
    else if (race.toLowerCase() == "tiefling"){
        if (gender.toLowerCase() == "male"){
            var firstName = maleT;
        } else var firstName = femT;
        var surname = surT;
    }
    else if (race.toLowerCase() == "half-orc"){
        if (gender.toLowerCase() == "male"){
            var firstName = maleHO;
        } else var firstName = femHO;
        var surname = surHO;
    }
    else if (race.toLowerCase() == "half-elf"){
        if (gender.toLowerCase() == "male"){
            var firstName = maleHE;
        } else var firstName = femHE;
        var surname = surHE;
    }

    //randomly generate name:

    //random number generator for determining the index of each name part
    let firstSelector = Math.floor(Math.random() * firstName.length);
    let lastSelector = Math.floor(Math.random() * surname.length);

    //randomly selecting names from the name array lists
    let randomName;
    if (surname.length>0) {
        randomName = firstName[firstSelector] + " " + surname[lastSelector];
    }
    else randomName = firstName[firstSelector];

    //output resulting random name to the random name box
    document.getElementById("input_name").value = randomName;
}

//this function prevents the form from default submitting on completion of a submit event
function stopSubmit(){
    //get the form
    const form = document.getElementById('form');

    //prevent form from default submitting on completion
    form.addEventListener("submit", function(event){
        event.preventDefault();
    })
}

//this function rolls the dice to create a random result
function roll(diceType, output){

    //stop form from submitting
    stopSubmit();

    //get random number from the possible numbers on the dice, dependant on dice type
    let diceRoll = Math.floor(Math.random() * diceType);

    //output the result to the corresponding result box
    document.getElementById(output).value = diceRoll.toString();
}

function getDetails(){

    //get the values of the feature, specialty, trait, ideals, bond, flaw rolls
    let background = document.getElementById('background_result').value;
    let specialty = document.getElementById('specialty').value;
    let trait = document.getElementById('trait').value;
    let ideal = document.getElementById('ideal').value;
    let bond = document.getElementById('bond').value;
    let flaw = document.getElementById('flaw').value;


    let backgroundsArray;
    let index;
    let feature_result;
    let specialty_result;
    let trait_result;
    let ideal_result;
    let bond_result;
    let flaw_result;

    /*use fetch to get from the json file to get the feature, specialty, trait, ideal, bond, and flaw details according to the values
    inputted by user or randomly rolled and selected*/
    fetch("../json/backgrounds.json")
        .then(res => res.json())
        .then(data => backgroundsArray = data.backgrounds)
        .then(()=> index = backgroundsArray.findIndex(obj => obj.name==background))
        .then(()=> feature_result = backgroundsArray[index].feature)
        .then(()=> document.getElementById('feature_result').innerHTML="Feature = "+feature_result)
        .then(()=> specialty_result = backgroundsArray[index].specialty[specialty])
        .then(()=> document.getElementById('specialty_result').innerHTML="Specialty = "+specialty_result)
        .then(()=> trait_result = backgroundsArray[index].characteristics.trait[trait])
        .then(()=> document.getElementById('trait_result').innerHTML="Trait = "+trait_result)
        .then(()=> ideal_result = backgroundsArray[index].characteristics.ideal[ideal])
        .then(()=> document.getElementById('ideal_result').innerHTML="Ideal = "+ideal_result)
        .then(()=> bond_result = backgroundsArray[index].characteristics.bond[bond])
        .then(()=> document.getElementById('bond_result').innerHTML="Bond = "+bond_result)
        .then(()=> flaw_result = backgroundsArray[index].characteristics.flaw[flaw])
        .then(()=> document.getElementById('flaw_result').innerHTML="Flaw = "+flaw_result)






/*
    //get details, dependant on background type
    if (background.toLowerCase() == "acolyte"){

        if (trait == "1") document.getElementById('details').textContent += "Personality Trait: I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.";
        else if (trait == "2") document.getElementById('details').textContent += "Personality Trait: I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.";
        else if (trait == "3") document.getElementById('details').textContent += "Personality Trait: I see omens in every event and action. The gods try to speak to us, we just need to listen.";
        else if (trait == "4") document.getElementById('details').textContent += "Personality Trait: Nothing can shake my optimistic attitude.";
        else if (trait == "5") document.getElementById('details').textContent += "Personality Trait: I quote (or misquote) sacred texts and proverbs in almost every situation.";
        else if (trait == "6") document.getElementById('details').textContent += "Personality Trait: I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.";
        else if (trait == "7") document.getElementById('details').textContent += "Personality Trait: I’ve enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.";
        else if (trait == "8") document.getElementById('details').textContent += "Personality Trait: I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world.";

        if (ideal == "1") document.getElementById('details').textContent += "\nIdeal: I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.";
        else if (ideal == "2") document.getElementById('details').textContent += "\nIdeal: Charity. I always try to help those in need, no matter what the personal cost. (Good)";
        else if (ideal == "3") document.getElementById('details').textContent += "\nIdeal: Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)";
        else if (ideal == "4") document.getElementById('details').textContent += "\nIdeal: Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)";
        else if (ideal == "5") document.getElementById('details').textContent += "\nIdeal: Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)";
        else if (ideal == "6") document.getElementById('details').textContent += "\nIdeal: Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings. (Any)";

        if (bond == "1") document.getElementById('details').textContent += "\nBond: I would die to recover an ancient relic of my faith that was lost long ago.";
        else if (bond == "2") document.getElementById('details').textContent += "\nBond: I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.";
        else if (bond == "3") document.getElementById('details').textContent += "\nBond: I owe my life to the priest who took me in when my parents died.";
        else if (bond == "4") document.getElementById('details').textContent += "\nBond: Everything I do is for the common people.";
        else if (bond == "5") document.getElementById('details').textContent += "\nBond: I will do anything to protect the temple where I served.";
        else if (bond == "6") document.getElementById('details').textContent += "\nBond: I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.";

        if (flaw == "1") document.getElementById('details').textContent += "\nFlaw: I judge others harshly, and myself even more severely.";
        else if (flaw == "2") document.getElementById('details').textContent += "\nFlaw: I put too much trust in those who wield power within my temple’s hierarchy.";
        else if (flaw == "3") document.getElementById('details').textContent += "\nFlaw: My piety sometimes leads me to blindly trust those that profess faith in my god.";
        else if (flaw == "4") document.getElementById('details').textContent += "\nFlaw: I am inflexible in my thinking.";
        else if (flaw == "5") document.getElementById('details').textContent += "\nFlaw: I am suspicious of strangers and expect the worst of them.";
        else if (flaw == "6") document.getElementById('details').textContent += "\nFlaw: Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.";

    }

    else if (background.toLowerCase() == "criminal/spy"){

    }
    else if (background.toLowerCase() == "folk hero"){

    }
    else if (background.toLowerCase() == "noble"){

    }
    else if (background.toLowerCase() == "sage"){

    }
    else if (background.toLowerCase() == "soldier"){

    }*/


}
