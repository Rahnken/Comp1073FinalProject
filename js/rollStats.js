

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log('start');
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
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

// Stop Submissions
function stopSubmit(){
    //get the form
    const form = document.getElementById('form');

    //prevent form from default submitting on completion
    form.addEventListener("submit", function(event){
        event.preventDefault();
    })
}

/*******************************************************************************************/
/*                                     ROLL STATS                                          */
/*******************************************************************************************/

function roll(output, img1, img2, img3, img4){
    //stop form from submitting
    event.preventDefault();

    let diceType = 6 ;

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

/**
 * SUBMIT STATS TO NEXT STAGE
 */

function submitStats(statValue1,statValue2,statValue3,statValue4,statValue5,statValue6)  {
    event.preventDefault();
    // let stat1 = document.getElementById(statValue1).value;
    // let stat2 = document.getElementById(statValue1).value;
    // let stat3 = document.getElementById(statValue1).value;
    // let stat4 = document.getElementById(statValue1).value;
    // let stat5 = document.getElementById(statValue1).value;
    // let stat6 = document.getElementById(statValue1).value;

    document.getElementById(stat1).value =


    console.log(stat1);
}