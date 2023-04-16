
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
const myList = document.querySelector("#list");
data.forEach(item => {
  const listItem = document.createElement('li');
  const img = document.createElement('img');
  img.setAttribute('src', item.icon);
  img.setAttribute('alt', item.category);
  const sp = document.createElement('span');
  sp.textContent = `${item.score}/100`;
  const para = document.createElement('p');
  para.textContent = `${item.category}`;
  listItem.appendChild(img);
  listItem.appendChild(para);
listItem.appendChild(sp);
  myList.appendChild(listItem);
})