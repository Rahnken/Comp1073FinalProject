

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

const fill = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Drag Functions
function dragStart() {
    console.log('start');
}

function dragEnd() {
    console.log('end');
}