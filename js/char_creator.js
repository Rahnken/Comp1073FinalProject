/*
Main Author:  Stephanie Holly Bedard, 200443133
*/

/*******************************************************************************************/
/*                                     UTILITIES                                           */
/*******************************************************************************************/

//creates the initial page configurations
function startup() {
    // alert("Startup is working!")

    let racesArray;//initialize variable to store race data in
    //get values for the Race dropdown
    fetch('https://www.dnd5eapi.co/api/races')//connect to API to retrieve race data
        .then(res => res.json())//convert/parse api data to json
        .then(data => racesArray = data.results) //get the race data needed from data array and store in variable
        .then(() => racesArray.forEach(function(race){createDropdown(race,'race_input')})) //create a dropdown with each race name from the race array as an option

    //get values for the Gender dropdown
    const gendersArray = [{name:"Female"},{name: "Male"}];  //declare array with gender types, with json format
    gendersArray.forEach(function(gender){createDropdown(gender,'gender_input')})  //create a dropdown with each gender name from the gender array as an option

    //get values for the Class dropdown
    let classesArray;
    fetch('https://www.dnd5eapi.co/api/classes')
        .then(res => res.json())
        .then(data => classesArray = data.results)
        .then(() => classesArray.forEach(function(charClass){createDropdown(charClass,'class_input')}))

    //get values for Background dropdown
    let backgroundsArray;
    fetch("../json/backgrounds.json") //retrieve data from json file
        .then(res => res.json()) //parse the data to json
        .then(data => backgroundsArray = data.backgrounds)  //store the required data portion in an array
        .then(() => backgroundsArray.forEach(function(background){createDropdown(background,'background_input')}))  //create a dropdown by iterating through the array, with each background name as a select option

}

//Creates the options for the input selection dropdown
function createDropdown(item, input){
    const option = document.createElement("option");
    option.textContent = item.name;
    document.getElementById(input).appendChild(option);
}

/*Prevents the form from default submitting on completion of a submit event
  so that randomizer buttons can be clicked individually without submitting form */
function stopSubmit(){
    //get the form
    const form = document.getElementById('form');

    //prevent form from default submitting on completion
    form.addEventListener("submit", function(event){
        event.preventDefault();
    })
}

/*Chooses a random option from the dropdown as the selected option,
 then outputs the resulting selected option to the corresponding result box*/
function randomSelector(input, output){
    //stop page from auto submitting
    stopSubmit();
    //get the dropdown
    let dropDown = document.getElementById(input);

    //get possible races from dropdown
    let choices = dropDown.options;

    //remove the Choose option from the choices so that it's not included in the available choices
    if (choices[0].text.startsWith("Choose")) {
        choices.remove(0);
    }
    //randomly get number for determining the chosen index from the dropdown array
    let choiceSelector = Math.floor(Math.random() * choices.length);

    //randomly selecting a race from the race array using the random index
    let randomSelection = choices[choiceSelector].text;

    //set the randomized option as the option selected in the dropdown then output result
    dropDown[choiceSelector].selected=true;
    document.getElementById(output).innerHTML=randomSelection;
}

//Rolls the dice to create a random result
function roll(diceType, output){
    //stop form from submitting
    stopSubmit();

    //get random number from the possible numbers on the dice, dependant on dice type (eg. D8 dice will have diceType=8)
    let diceRoll = Math.floor(Math.random() * diceType);

    //output the random number rolled to the corresponding result box
    document.getElementById(output).value = diceRoll.toString();
}

//Outputs the selected dropdown value to the corresponding result box
function fillResult(input, output){
    let dropDown = document.getElementById(input);
    let result = dropDown.options[dropDown.selectedIndex].text;
    document.getElementById(output).innerHTML=result;
}

/*******************************************************************************************/
/*                              CHARACTER DETAILS                                          */
/*******************************************************************************************/

function getDetails(){

    //get the values of the feature, specialty, trait, ideals, bond, flaw rolls
    let background = document.getElementById('background_result').innerHTML;
    let specialty = document.getElementById('specialty').value;
    let trait = document.getElementById('trait').value;
    let ideal = document.getElementById('ideal').value;
    let bond = document.getElementById('bond').value;
    let flaw = document.getElementById('flaw').value;

    //declare variables for the storing the results of each character detail
    let backgroundsArray, index, feature_result, specialty_result, trait_result, ideal_result, bond_result, flaw_result;

    /*use fetch to get from the json file, then get data on the feature, specialty, trait, ideal, bond, and flaw details
    according to the character background name inputted by user, or randomly rolled and selected*/
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
}

/*******************************************************************************************/
/*                              RANDOM NAME GENERATOR                                      */
/*******************************************************************************************/

//Generates a random name, depending on the preselected race and gender of character
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

    //HALFLING NAMES
    //female
    const femHA = ["Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"];
    //male
    const maleHA = [ "Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby"];
    //surname
    const surHA = ["Brushgather", "Goodbarrel", "Greenbottle", "Highhill", "Hilltopple", "Leagallow", "Tealeaf", "Thorngage", "Tosscobble", "Underbough"];



    //get the gender
    let gender = document.getElementById('gender_result').innerHTML.toLowerCase();

    //get the race
    let race = document.getElementById('race_result').innerHTML.toLowerCase();

    if (race === "" || gender === ""){
        alert("You must first select Gender and Race.");
    }

    let firstName,surName;
    //get which name arrays to use:
    switch(race+gender){

        case 'dragonbornmale':
             firstName = maleDB;
            surName = surDB;
            break;
        case 'dragonbornfemale' :
            firstName = femDB;
            surName = surDB;
            break;
        case 'dwarfmale':
            firstName = maleDW;
            surName = surDW;
            break;
        case 'dwarffemale' :
            firstName = femDW;
            surName = surDW;
            break;
        case 'elfmale':
            firstName = maleE;
            surName =   surE;
            break;
        case 'elffemale':
            firstName =femE;
            surName  =  surE;
            break;
        case 'gnomemale':
            firstName = maleG;
            surName =   surG ;
            break;
        case 'gnomefemale':
            firstName = femG;
            surName = surG;
            break;
        case 'humanmale':
            firstName = maleH;
            surName = surH;
            break;
        case'humanfemale':
            firstName = femH;
            surName = surH;
            break;
        case 'tieflingmale':
            firstName = maleT;
            surName = surT;
            break;
        case 'tieflingfemale':
            firstName = femT;
            surName = surT;
            break;
        case 'half-orcmale':
            firstName = maleHO;
            surName = surHO;
            break;
        case 'half-orcfemale':
            firstName = femHO;
            surName = surHO;
            break;
        case'half-elfmale':
            firstName = maleHE;
            surName = surHE;
            break;
        case 'half-elffemale':
            firstName = femHE;
            surName = surHE;
            break;
        case 'halflingmale':
            firstName = maleHA;
            surName = surHA;
                break;
        case 'halflingfemale':
            firstName = femHA;
            surName = surHA;
            break;

            default:

            return "didn't work";
    }

    //randomly generate name:

    //random number generator for determining the index of each name part
    let firstSelector = Math.floor(Math.random() * firstName.length);
    let lastSelector = Math.floor(Math.random() * surName.length);

    //randomly selecting names from the name array lists
    let randomName;
    if (surName.length>0) {
        randomName = firstName[firstSelector] + " " + surName[lastSelector];
    }
    else randomName = firstName[firstSelector];

    //output resulting random name to the random name box
    document.getElementById("input_name").value = randomName;
}






