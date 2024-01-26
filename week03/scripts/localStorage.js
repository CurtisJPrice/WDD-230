//Get all the HTML element references
const myinput = document.querySelector('input');
const mybutton = document.querySelector('button');
const mylist = document.querySelector('#listcontainer');

// if the result of getting the chapter list is 'null' then an empty array is assigned to chaptersArray
let chaptersArray = getChapterList() || [];
console.log('Show the Chapter Array')
console.log(chaptersArray)

chaptersArray.forEach(chapter => {
displayList(chapter);
});

function displayList(item) {
let li = document.createElement('li');
let deletebutton = document.createElement('button');
  li.textContent = item; // note the use of the item parameter and then delete this comment
deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
li.append(deletebutton);
mylist.append(li);
deletebutton.addEventListener('click', function () {
    mylist.removeChild(li);// removes from the html page list
    deleteChapter(li.textContent); // removes the chapter from the array and localStorage.
    myinput.focus();
});
}

//Write the list of chapters to local storage
function setChapterList() {
console.log('SET chapters')
console.log(chaptersArray)
localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

//Read the list of chapters from local storage
function getChapterList() {
console.log('GET chapters')
console.log(localStorage.getItem('myFavBOMList'))
return JSON.parse(localStorage.getItem('myFavBOMList'));

}

//Remove an item from the list
function deleteChapter(chapterToDelete) {
console.log('DELETE chapters')
console.log(chapterToDelete)
chapterToDelete = chapterToDelete.slice(0, chapterToDelete.length - 1);
console.log(chapterToDelete)
chaptersArray = chaptersArray.filter(item => item !== chapterToDelete);
setChapterList();
}

mybutton.addEventListener('click', () => {
if (myinput.value != '') {
    displayList(myinput.value);
    chaptersArray.push(myinput.value);
    setChapterList();
    myinput.value = '';
    myinput.focus();
}
});