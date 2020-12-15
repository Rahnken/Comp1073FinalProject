/**
 *
 * This page is for user to roll stat values then assign them to the
 * desired stat. It is then saved into a Json file and passed on to
 * the next page
 *
 * @author Lani Low
 *
 */


// Create final stat vars and set them to zero
let strengthFinal = 0;
let dexterityFinal = 0;
let constitutionFinal = 0;
let intelligenceFinal = 0;
let wisdomFinal = 0;
let charismaFinal = 0;

/*******************************************************************************************/
/*                                   APPLY STAT BONUSES                                    */
/*******************************************************************************************/

const dropStatsForm = document.forms['dropStats'];  // Select the Drop Stats form
const p = document.createElement('p');      // Create a new p element
const p2 = document.createElement('p');     // Create another new p element

// Get the div containers which are associated with a given stat
let strengthBonus = dropStatsForm.querySelector('#strength');
let dexterityBonus = dropStatsForm.querySelector('#dexterity');
let constitutionBonus = dropStatsForm.querySelector('#constitution');
let intelligenceBonus = dropStatsForm.querySelector('#intelligence');
let wisdomBonus = dropStatsForm.querySelector('#wisdom');
let charismaBonus = dropStatsForm.querySelector('#charisma');

// Get the race data from local storage
let charRace;
charRace = localStorage.getItem('race').toLowerCase();

/**
 * Switch statement used to determine what stat bonuses the character will receive
 */
switch (charRace)   {
    case 'dragonborn':
        p.textContent = '+ 2';  // Add text to the paragraph element, this is the visual of the stat bonus
        strengthBonus.parentNode.insertBefore(p, strengthBonus.nextSibling);    // Append the paragraph element after the div element
        strengthFinal += 2;     // Add the stat bonus to the stat
        p2.textContent = '+ 1';
        charismaBonus.parentNode.insertBefore(p2, charismaBonus.nextSibling);
        charismaFinal += 1;
        break;

    case 'dwarf':
        p.textContent = '+ 2';
        constitutionBonus.parentNode.insertBefore(p, constitutionBonus.nextSibling);
        constitutionFinal += 2;
        break;

    case 'elf':
        p.textContent = '+ 2';
        dexterityBonus.parentNode.insertBefore(p, dexterityBonus.nextSibling);
        dexterityFinal += 2;
        break;

    case 'gnome':
        p.textContent = '+ 2';
        intelligenceBonus.parentNode.insertBefore(p, intelligenceBonus.nextSibling);
        intelligenceFinal += 2;
        break;

    case 'half-elf':
        p.textContent = '+ 2';
        charismaBonus.parentNode.insertBefore(p, charismaBonus.nextSibling);
        charismaFinal += 2;
        break;

    case 'half-orc':
        p.textContent = '+ 2';
        strengthBonus.parentNode.insertBefore(p, strengthBonus.nextSibling);
        strengthFinal += 2;
        p2.textContent = '+ 1';
        constitutionBonus.parentNode.insertBefore(p2, constitutionBonus.nextSibling);
        constitutionFinal += 1;
        break;

    case 'halfling':
        p.textContent = '+ 2';
        dexterityBonus.parentNode.insertBefore(p, dexterityBonus.nextSibling);
        dexterityFinal += 2;
        break;

    case 'human':
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');
        const p5 = document.createElement('p');
        const p6 = document.createElement('p');

        p.textContent = '+ 1';
        strengthBonus.parentNode.insertBefore(p, strengthBonus.nextSibling);
        strengthFinal += 1;

        p2.textContent = '+ 1';
        dexterityBonus.parentNode.insertBefore(p2, dexterityBonus.nextSibling);
        dexterityFinal += 1;

        p3.textContent = '+ 1';
        constitutionBonus.parentNode.insertBefore(p3, constitutionBonus.nextSibling);
        constitutionFinal += 1;

        p4.textContent = '+ 1';
        intelligenceBonus.parentNode.insertBefore(p4, intelligenceBonus.nextSibling);
        intelligenceFinal += 1;

        p5.textContent = '+ 1';
        wisdomBonus.parentNode.insertBefore(p5, wisdomBonus.nextSibling);
        wisdomFinal += 1;

        p6.textContent = '+ 1';
        charismaBonus.parentNode.insertBefore(p6, charismaBonus.nextSibling);
        charismaFinal += 1;

        break;

    case 'tiefling':
        p.textContent = '+ 1';
        intelligenceBonus.parentNode.insertBefore(p, intelligenceBonus.nextSibling);
        intelligenceFinal += 1;
        p2.textContent = '+ 2';
        charismaBonus.parentNode.insertBefore(p2, charismaBonus.nextSibling);
        charismaFinal += 2;
        break;

    default:
        console.log("There was doubt");

}

/*******************************************************************************************/
/*                               DRAG AND DROP FUNCTION                                    */
/*******************************************************************************************/

/**
 * Allow draggable elements to be dropped without
 * submitting the form
 * @param ev
 */
function allowDrop(ev) {
    ev.preventDefault();
}

/**
 * Move elements
 * @param ev
 */
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

/**
 * Append draged elements to droppable elements
 * without submitting teh form
 * @param ev
 */
function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
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
    // Add an attribute to hold the stat number so it can be retrieved later
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

// Add event listener to button on form
dropStatsForm.addEventListener('submit', function (e) {

    // Check to ensure all stat divs have child nodes (values)
    if (
            !strengthBonus.hasChildNodes()
        ||  !dexterityBonus.hasChildNodes()
        ||  !constitutionBonus.hasChildNodes()
        ||  !intelligenceBonus.hasChildNodes()
        ||  !wisdomBonus.hasChildNodes()
        ||  !charismaBonus.hasChildNodes()
    )
    {
        e.preventDefault();
        // Give user a warning that data given was not correct
        document.getElementById('statSubmitError').innerHTML= "All stats need to have values";
    }

    // Check that stat div elements only have 1 child node
    else if (
        strengthBonus.hasChildNodes() > 1
        ||  dexterityBonus.hasChildNodes() > 1
        ||  constitutionBonus.hasChildNodes() > 1
        ||  intelligenceBonus.hasChildNodes() > 1
        ||  wisdomBonus.hasChildNodes() > 1
        ||  charismaBonus.hasChildNodes() > 1
    )
    {
        e.preventDefault();
        // Give user a warning that data given was not correct
        document.getElementById('statSubmitError').innerHTML= "Can only have 1 value for each stat";
    }

    else {

    // Get the values from the form
    let strength = dropStatsForm.querySelector('#strength').querySelector('button').getAttribute("statValue");
    let dexterity = dropStatsForm.querySelector('#dexterity').querySelector('button').getAttribute("statValue");
    let constitution = dropStatsForm.querySelector('#constitution').querySelector('button').getAttribute("statValue");
    let intelligence = dropStatsForm.querySelector('#intelligence').querySelector('button').getAttribute("statValue");
    let wisdom = dropStatsForm.querySelector('#wisdom').querySelector('button').getAttribute("statValue");
    let charisma = dropStatsForm.querySelector('#charisma').querySelector('button').getAttribute("statValue");

    // Add numbers to final stat values
    strengthFinal += parseInt(strength);
    dexterityFinal += parseInt(dexterity);
    constitutionFinal += parseInt(constitution);
    intelligenceFinal += parseInt(intelligence);
    wisdomFinal += parseInt(wisdom);
    charismaFinal += parseInt(charisma);

    // Print to console for testing purpose
    console.log('\nStrength: ' + strengthFinal +
        '\ndexterity: ' + dexterityFinal +
        '\nconstitution: ' + constitutionFinal +
        '\nintelligence: ' + intelligenceFinal +
        '\nwisdom: ' + wisdomFinal +
        '\ncharisma: ' + charismaFinal
    );

        // Clear the warning
        document.getElementById('statSubmitError').innerHTML="";

        // Store the data
        localStorage.setItem('strength', strengthFinal);
        localStorage.setItem('dexterity', dexterityFinal);
        localStorage.setItem('constitution', constitutionFinal);
        localStorage.setItem('intelligence', intelligenceFinal);
        localStorage.setItem('wisdom', wisdomFinal);
        localStorage.setItem('charisma', charismaFinal);
    }

});