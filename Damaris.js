const articles = document.querySelector('.articles');
const url1 =
  'https://classes.codingbootcamp.cz/assets/classes/602/guardian.php';
const url2 =
  'https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science';
const loadData = async () => {
  const response = await fetch(url1);
  console.log(response);
  const data = await response.json();
  console.log(data);
  displayItems(data);
};
const loadData2 = async () => {
  const response = await fetch(url2);
  console.log(response);
  const data = await response.json();
  console.log(data);
};
loadData();
const displayItems = (data) => {
  const ul = document.querySelector('.science-articles');
  ul.innerHTML = '';
  data.data.forEach((category) => {
    const li = document.createElement('li');
    li.innerText = category;
    li.addEventListener('click', () => {
      console.log('text');
      getData(category);
    });
    ul.appendChild(li);
  });
};
const getData = (category) => {
  articles.innerHTML = '';
  fetch(
    `https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${category}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.data.channel.item.forEach((el) => {
        const div = document.createElement('div');
        const descriptionDiv = document.createElement('div');
        const p = document.createElement('p');
        const h2 = document.createElement('h2');
        h2.textContent = el.title;
        p.textContent = el.pubDate;
        descriptionDiv.innerHTML = el.description;
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(descriptionDiv);
        articles.appendChild(div);
      });
    });
};
