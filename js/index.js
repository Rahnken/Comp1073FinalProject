/** Main Author: Jordan Coulter 200236142
 to add a button to send user to the character_creator page
 */

//Creates a button and has the button say Create Character on it
var btn = document.createElement("button");
btn.innerHTML = "Create Character";

//grabs the div with the class title intro and appends the button to the end of the div
var p = document.getElementsByClassName("intro")[0];
p.appendChild(btn);

//On click EventListener that sends us to the character_creator page
btn.addEventListener("click",function()
{
    location.href = "character_creator.html";
});
