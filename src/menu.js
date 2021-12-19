class Food {
  constructor(name, price, description) {
    this.name = name;
    this.price = '$' + price;
    this.description = description;
  }
}
const chili = new Food('Bowl of Chili', 2.99, 'Our Award Winning sauce. Goes great on everything');
const fries = new Food('French Fries', 4.99, 'Hot & Crispy. Try it with chili, cheese, or both!');
const cheesesticks = new Food('6 pc Cheese Sticks', 6.99, 'Deep fried to perfection');
const hotDog = new Food('Plain Hot Dog', 1.99, `There's nothing plain about this dog`);
const chiliDog = new Food('Chili Dog', 2.99, 'The reason we got into business. Steamed bun, all the works. Are you ready?');
const cheeseBurger = new Food('Cheeseburger', 5.99, 'Made in your vision. Sky is the limit!');
const sundae = new Food('Ice Cream Sundae', 4.99, 'Hope you left room for dessert');
const cheeseCake = new Food('Slice of Cheesecake', 2.99, 'Light & Refreshing');
const iceCream = new Food('Ice Cream (per scoop)', 2, 'Vanilla, Chocolate, Twist');

const apps = [chili, fries, cheesesticks];
const meals = [hotDog, chiliDog, cheeseBurger];
const treats = [sundae, cheeseCake, iceCream];


export function menuTab() {
  const dataContainer = document.getElementById('dataContainer');
  dataContainer.replaceChildren();

  const drawList = (foodGroup, sectionDiv) => {
    foodGroup.forEach(food =>  {
      const itemHolder = document.createElement('div');
        itemHolder.textContent = food.name;
        itemHolder.classList.add('foodList')

      const itemDesc = document.createElement('p');
        itemDesc.textContent = food.description;
        itemDesc.id = 'foodDescription';

      const itemPrice = document.createElement('p');
        itemPrice.textContent = food.price;
        itemPrice.id = 'foodPrice';

      sectionDiv.appendChild(itemHolder);
      itemHolder.appendChild(itemDesc);
      itemHolder.appendChild(itemPrice);
    });
  }

  const appetizers = document.createElement('div');
    appetizers.id = 'appetizers';
    appetizers.textContent = 'Appetizers';
    drawList(apps, appetizers);

  const entrees = document.createElement('div');
    entrees.id = 'entrees';
    entrees.textContent = 'Entrees';
    drawList(meals, entrees);

  const dessert = document.createElement('div');
    dessert.id = 'dessert';
    dessert.textContent = 'dessert';
    drawList(treats, dessert);

  dataContainer.appendChild(appetizers);
  dataContainer.appendChild(entrees);
  dataContainer.appendChild(dessert);
}