const loadData = async () => {
  const response = await fetch(
    'https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science'
  );
  const data = await response.json();
  // console.log(data);
  const articlesList = document.querySelector('ul.articles');
  const articlesArr = data.data.channel.item;
  // console.log(articlesArr);
  articlesArr.forEach((article) => {
    const li = document.createElement('li');
    li.innerHTML = `<li>${article.title}</li>`;
    articlesList.appendChild(li);
  });
};
loadData();
