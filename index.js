
const data = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
];
const myList = document.querySelector("#data");
const ul = document.createElement('ul');
data.forEach(item => {
  const li = document.createElement('li');
 const title = document.createElement('div')
  const icon = document.createElement('img');
  icon.src = item.icon;
  title.appendChild(icon);
  const titlePara = document.createElement('p');
  titlePara.textContent = item.category;
  title.appendChild(titlePara);
  li.appendChild(title);
  const p = document.createElement('p');
  p.innerHTML = `<span>${item.score}</span> / 100`;
  li.appendChild(p);
  ul.appendChild(li);
});
myList.appendChild(ul);