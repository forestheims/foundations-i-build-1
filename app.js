// import functions and grab DOM elements
const button = document.getElementById('generate');
const paragraph = document.getElementById('random-num');

// initialize global state

// set event listeners 
button.addEventListener('click', () => {
// use user input to update state 
    let x = Math.floor(Math.random() * 10000);
// update DOM to reflect the new state
    paragraph.textContent = x;
});


