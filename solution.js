//Task 1 
const taskOne = document.getElementById('task1');
taskOne.innerText = "Changed using 'innerText'.";
//Task 2 
const taskTwo = document.getElementById('task2');
taskTwo.innerHTML = '<button> Click Me! </button>';
//Task 3 
const taskThree = document.querySelector('body');
taskThree.style.backgroundColor = '#232323';
//Task 4 
const taskFour = document.getElementsByClassName('item');
for (let i = 0; i < taskFour.length; i++) {
    taskFour[i].style.border = '2px solid #456773';
}
//Task 5 
const taskFive = document.getElementById('task5');
taskFive.href = 'https://www.springboard.com/';
//Task 6
const taskSix = document.getElementById('task6');
taskSix.value = 'DOM Master';
//Task 7 
const taskSeven = document.getElementById('task7');
taskSeven.classList.add('new-class');
//Task 8 
const taskEight = document.getElementById('task8');
const newButton = document.createElement('button');
newButton.innerText = 'Click Me!';
taskEight.append(newButton);
//Task 9 
const taskNine = document.getElementById('task9');
taskNine.remove();