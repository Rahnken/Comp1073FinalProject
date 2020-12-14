/**
 *
 * This page is for user to roll stat values then assign them to the
 * desired stat. It is then saved into a Json file and passed on to
 * the next page
 *
 * @author Lani Low
 *
 */

/*******************************************************************************************/
/*                                   APPLY STAT BONUSES                                    */
/*******************************************************************************************/

const dropStatsForm = document.forms['dropStats'];
const p = document.createElement('p');
const p2 = document.createElement('p');

let strengthBonus = dropStatsForm.querySelector('#strength');
let dexterityBonus = dropStatsForm.querySelector('#dexterity');
let constitutionBonus = dropStatsForm.querySelector('#constitution');
let intelligenceBonus = dropStatsForm.querySelector('#intelligence');
let wisdomBonus = dropStatsForm.querySelector('#wisdom');
let charismaBonus = dropStatsForm.querySelector('#charisma');


let charRace;
charRace.innerHTML = localStorage.getItem('race');

switch (charRace)   {
    case 'dragonborn':
        p.textContent = '+ 2';
        strengthBonus.parentNode.insertBefore(p, strengthBonus.nextSibling);
        p2.textContent = '+ 1';
        charismaBonus.parentNode.insertBefore(p2, charismaBonus.nextSibling);
        break;

    case 'dwarf':
        p.textContent = '+ 2';
        constitutionBonus.parentNode.insertBefore(p, constitutionBonus.nextSibling);
        break;

    case 'elf':
        p.textContent = '+ 2';
        dexterityBonus.parentNode.insertBefore(p, dexterityBonus.nextSibling);
        break;

    case 'gnome':
        p.textContent = '+ 2';
        intelligenceBonus.parentNode.insertBefore(p, intelligenceBonus.nextSibling);
        break;

    case 'half-elf':
        p.textContent = '+ 2';
        charismaBonus.parentNode.insertBefore(p, charismaBonus.nextSibling);
        break;

    case 'half-orc':
        p.textContent = '+ 2';
        strengthBonus.parentNode.insertBefore(p, strengthBonus.nextSibling);
        p2.textContent = '+ 1';
        constitutionBonus.parentNode.insertBefore(p2, constitutionBonus.nextSibling);
        break;

    case 'halfling':
        p.textContent = '+ 2';
        dexterityBonus.parentNode.insertBefore(p, dexterityBonus.nextSibling);
        break;

    case 'human':
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');
        const p5 = document.createElement('p');
        const p6 = document.createElement('p');

        p.textContent = '+ 1';
        strengthBonus.parentNode.insertBefore(p, strengthBonus.nextSibling);

        p2.textContent = '+ 1';
        dexterityBonus.parentNode.insertBefore(p2, dexterityBonus.nextSibling);

        p3.textContent = '+ 1';
        constitutionBonus.parentNode.insertBefore(p3, constitutionBonus.nextSibling);

        p4.textContent = '+ 1';
        intelligenceBonus.parentNode.insertBefore(p4, intelligenceBonus.nextSibling);

        p5.textContent = '+ 1';
        wisdomBonus.parentNode.insertBefore(p5, wisdomBonus.nextSibling);

        p6.textContent = '+ 1';
        charismaBonus.parentNode.insertBefore(p6, charismaBonus.nextSibling);

        break;

    case 'tiefling':
        p.textContent = '+ 1';
        intelligenceBonus.parentNode.insertBefore(p, intelligenceBonus.nextSibling);
        p2.textContent = '+ 2';
        charismaBonus.parentNode.insertBefore(p2, charismaBonus.nextSibling);
        break;

    default:
        console.log("There was doubt");

}

/*******************************************************************************************/
/*                               DRAG AND DROP FUNCTION                                    */
/*******************************************************************************************/

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log('start');
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log('end');
}

/*******************************************************************************************/
/*                                     ROLL STATS                                          */
/*******************************************************************************************/

/**
 * This function is used to roll the dice for stats
 *
 * @param output
 * @param img1 these are the dice that show up on the page
 * @param img2
 * @param img3
 * @param img4
 */
function roll(output, img1, img2, img3, img4){
    //stop form from submitting
    event.preventDefault();

    // For stats a 6 sided dice is used
    let diceType = 6 ;

    // randomize the value of each dice
    let diceRoll1 = Math.floor(Math.random() * diceType)+1;
    let diceRoll2 = Math.floor(Math.random() * diceType)+1;
    let diceRoll3 = Math.floor(Math.random() * diceType)+1;
    let diceRoll4 = Math.floor(Math.random() * diceType)+1;

    // Determine the lowest number
    let min = Math.min(diceRoll1, diceRoll2, diceRoll3, diceRoll4);

    // add all numbers and subtract the lowest
    let statTotal = (diceRoll1 + diceRoll2 + diceRoll3 + diceRoll4) - min;

    //output the random number rolled to the corresponding result box
    document.getElementById(output).value = statTotal;

    /*******SPINNING DICE IMAGES*******/

    //output the random number to the dice image
    document.getElementById(img1).src="..\\img\\"+diceType+"-"+diceRoll1+".png";
    document.getElementById(img2).src="..\\img\\"+diceType+"-"+diceRoll2+".png";
    document.getElementById(img3).src="..\\img\\"+diceType+"-"+diceRoll3+".png";
    document.getElementById(img4).src="..\\img\\"+diceType+"-"+diceRoll4+".png";

    //triggering reflow of spin animation by removing animation class and offset width
    document.getElementById(img1).classList.remove("rotate");
    document.getElementById(img2).classList.remove("rotate");
    document.getElementById(img3).classList.remove("rotate");
    document.getElementById(img4).classList.remove("rotate");

    void document.getElementById(img1).offsetWidth;
    void document.getElementById(img2).offsetWidth;
    void document.getElementById(img3).offsetWidth;
    void document.getElementById(img4).offsetWidth;

    //reassign rotate class to image to make it spin on every button click
    document.getElementById(img1).classList.add("rotate");
    document.getElementById(img2).classList.add("rotate");
    document.getElementById(img3).classList.add("rotate");
    document.getElementById(img4).classList.add("rotate");
}

/*******************************************************************************************/
/*                          SUBMIT STATS TO DRAG AND DROP BUTTONS                          */
/*******************************************************************************************/

const statValuesForm = document.forms['statValues'];

statValuesForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the values from the form
    let stat1 = document.getElementById('statValue1').value;
    let stat2 = document.getElementById('statValue2').value;
    let stat3 = document.getElementById('statValue3').value;
    let stat4 = document.getElementById('statValue4').value;
    let stat5 = document.getElementById('statValue5').value;
    let stat6 = document.getElementById('statValue6').value;

    // Set the values to the buttons
    document.getElementById('stat1').innerHTML = stat1;
    document.getElementById('stat1').setAttribute("statValue", stat1);

    document.getElementById('stat2').innerHTML = stat2;
    document.getElementById('stat2').setAttribute("statValue", stat2);

    document.getElementById('stat3').innerHTML = stat3;
    document.getElementById('stat3').setAttribute("statValue", stat3);

    document.getElementById('stat4').innerHTML = stat4;
    document.getElementById('stat4').setAttribute("statValue", stat4);

    document.getElementById('stat5').innerHTML = stat5;
    document.getElementById('stat5').setAttribute("statValue", stat5);

    document.getElementById('stat6').innerHTML = stat6;
    document.getElementById('stat6').setAttribute("statValue", stat6);

    /**
     * I tried to use a for loop, but it was breaking my drag and drop function
     */
    // create an array with the stat values in it

    // const statArray = [stat1, stat2, stat3, stat4, stat5, stat6];

    // Create buttons with the stat values in them
    // for ( let i = 0; i < statArray.length; i++ )    {
    //
    //     const button = document.createElement('button');        // Create button elements
    //     let section = document.getElementById('statButtons');   // Get the parent element
    //
    //
    //     button.textContent = statArray[i];                            // Fill values into the Buttons
    //     section.appendChild(button);                                  // Append to section element
    //     button.classList.add("statButton");                           // add a class to the buttons
    //     button.setAttribute("draggable", "true");   // Add draggable attribute
    //     button.setAttribute("statValue", statArray[i]);   // Add stat value attribute
    //     button.setAttribute("ondragstart", "drag(event)");
    // }
});


/*******************************************************************************************/
/*                     RETRIEVE STATS AND PASS THEM INTO THE JSON FILE                     */
/*******************************************************************************************/
// Var is made at top of doc
dropStatsForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the values from the form
    let strength = dropStatsForm.querySelector('#strength').querySelector('button').getAttribute("statValue");
    let dexterity = dropStatsForm.querySelector('#dexterity').querySelector('button').getAttribute("statValue");
    let constitution = dropStatsForm.querySelector('#constitution').querySelector('button').getAttribute("statValue");
    let intelligence = dropStatsForm.querySelector('#intelligence').querySelector('button').getAttribute("statValue");
    let wisdom = dropStatsForm.querySelector('#wisdom').querySelector('button').getAttribute("statValue");
    let charisma = dropStatsForm.querySelector('#charisma').querySelector('button').getAttribute("statValue");

    console.log('\nStrength' + strength +
        '\ndexterity' + dexterity +
        '\nconstitution' + constitution +
        '\nintelligence' + intelligence +
        '\nwisdom' + wisdom +
        '\ncharisma' + charisma);
});