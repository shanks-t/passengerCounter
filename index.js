
let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// intialize count as 0
// listen for clicks
// on click, increment count
// change count-el in html 

function increment()
{
    count++;
    countEl.innerText = count;
}

function save()
{
    let countString = count + " - "
    saveEl.textContent += countString;
    countEl.textContent = 0;   
    count = 0 
}
