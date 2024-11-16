const arrayDisplay = document.querySelector('.array-display');
const array = JSON.parse(arrayDisplay.textContent.slice(6));
const textContent = arrayDisplay.textContent;

let currentArray = array;

function changeData(array) {
  return `Array: [${array.join(', ')}]`;
}

const sortBtn = document.querySelector('.btn-sort');

sortBtn.onclick = () => {
  currentArray = currentArray.sort((a, b) => a - b);
  
  arrayDisplay.innerText = changeData(currentArray);
}

const reverseBtn = document.querySelector('.btn-reverse');

reverseBtn.onclick = () => {
  currentArray = currentArray.sort((a, b) => b - a);
  
  arrayDisplay.innerText = changeData(currentArray);
}

const pushBtn = document.querySelector('.btn-push');

pushBtn.onclick = () => {
  array.push(Math.ceil(Math.random() * 100));
  currentArray = array;
  arrayDisplay.innerText = changeData(currentArray);
}

const popBtn = document.querySelector('.btn-pop');

popBtn.onclick = () => {
  array.pop(10);
  currentArray = array;
  arrayDisplay.innerText = changeData(currentArray);
}

const shiftBtn = document.querySelector('.btn-shift');

shiftBtn.onclick = () => {
  array.shift();
  currentArray = array;
  arrayDisplay.innerText = changeData(currentArray);
}

const unshiftBtn = document.querySelector('.btn-unshift');

unshiftBtn.onclick = () => {
  array.unshift(Math.ceil(Math.random() * 100));
  currentArray = array;
  arrayDisplay.innerText = changeData(currentArray);
}