document.addEventListener('DOMContentLoaded', () => {
  const loadData = async () => {
    const response = await fetch(
      'https://classes.codingbootcamp.cz/assets/classes/602/guardian.php'
    );
    const data = await response.json();
    console.log(data);
    const categories = data.data;
    console.log(categories);
    const menu = document.getElementById('menu');
    categories.forEach((c) => {
      const category = document.createElement('h3');
      category.textContent = c;
      console.log(c);
      menu.appendChild(category);
    });
  };
  loadData();
});
