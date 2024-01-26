const myinput = document.querySelector('input');
const mybutton = document.querySelector('button');
const mylist = document.querySelector('.input');

console.log(document.querySelector('#favchap').value);
mybutton.addEventListener('click', function() { 
if (document.querySelector('#favchap').value !="") {
    const theItem = document.createElement('li');
    theItem.textContent = document.querySelector('#favchap').value
    const theDelete = document.createElement('button');
    theDelete.addEventListener('click',removeMe)
    theDelete.textContent = "❌"
    theItem.appendChild(theDelete)
    mylist.appendChild(theItem)
    myinput.focus();
    myinput.value="";
}
})

function removeMe(x) {
x.target.parentNode.remove();
}