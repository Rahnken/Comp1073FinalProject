/*
Main Author:  Stephanie Holly Bedard, 200443133
*/

function randomSelector(input, output){
    //stop page from autosubmitting
    stopSubmit();

    //get the dropdown
    var dropDown = document.getElementById(input);

    //get possible races from dropdown
    var choices = dropDown.options;

    //remove the Choose option from the choices
    choices.remove(0);

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
