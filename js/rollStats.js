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

// const fill = document.querySelectorAll('.fill');
// const empties = document.querySelectorAll('.empty');
//
// // Fill Listeners
// fill.addEventListener('dragstart', dragStart);
// fill.addEventListener('dragend', dragEnd);
//
// // Drag Functions
// function dragStart() {
//     console.log('start');
// }
//
// function dragEnd() {
//     console.log('end');
// }

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

    //const values = statValuesForm.querySelectorAll().value;
    // const formValues = statValuesForm.getElementsByTagName('input').value;
    // console.log(formValues);

    // Get the values from the form
    let stat1 = document.getElementById('statValue1').value;
    let stat2 = document.getElementById('statValue2').value;
    let stat3 = document.getElementById('statValue3').value;
    let stat4 = document.getElementById('statValue4').value;
    let stat5 = document.getElementById('statValue5').value;
    let stat6 = document.getElementById('statValue6').value;

    // create an array with the stat values in it
    const statArray = [stat1, stat2, stat3, stat4, stat5, stat6];

    // Create buttons with the stat values in them
    for ( let i = 0; i < statArray.length; i++ )    {

        const button = document.createElement('button');        // Create button elements
        let section = document.getElementById('statButtons');   // Get the parent element


        button.textContent = statArray[i];                            // Fill values into the Buttons
        section.appendChild(button);                                 // Append to section element
        button.classList.add("statButton");                           // add a class to the buttons
        button.setAttribute("draggable", "true");   // Add draggable attribute
        button.setAttribute("ondragstart", "drag(event)");
    }
});
/*******************************************************************************************/
/*                     RETRIEVE STATS AND PASS THEM INTO THE JSON FILE                     */
/*******************************************************************************************/

const dropStatsForm = document.forms['dropStats'];

dropStatsForm.addEventListener('submit', function (e) {
    e.preventDefault();
});