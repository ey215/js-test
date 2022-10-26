const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const contentOne = document.createElement('p');

contentOne.classList.add('p');
contentOne.style.cssText = 'color: red;';
contentOne.textContent = "Hey I'm red!";

container.appendChild(contentOne);

const blueH3 = document.createElement('h3');
blueH3.classList.add('h3');
blueH3.style.cssText = "color: blue";
blueH3.textContent = "I'm a blue h3!";

container.appendChild(blueH3);

const newDiv = document.createElement('div');
newDiv.classList.add('newDiv');
newDiv.style.backgroundColor = "pink";
newDiv.style.border = "1px solid black";


const divH1 = document.createElement('h1');
divH1.classList.add('divH1');
divH1.textContent = "I'm in a div";
newDiv.appendChild(divH1);

const newPara = document.createElement('p');
newPara.classList.add('newPara');
newPara.textContent = "ME TOO!";
newDiv.appendChild(newPara);


container.appendChild(newDiv);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");