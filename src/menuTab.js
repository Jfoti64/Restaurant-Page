const body = document.querySelector('body');


let menuItems = [
    {
        'name': 'Pizza',
        'description': 'Your choice of toppings. 8in, 12in, or 14in',
        'price': '$14.99 / 21.99 / 26.99'
    },
    {
        'name': 'Steak',
        'description': 'With a side of fries or mashed potatoes',
        'price': '$22.99'
    },
    {
        'name': 'Gourmet Cheese Burger',
        'description': 'Ketchup, lettuce, and grilled onions',
        'price': '$13.99'
    },
    {
        'name': 'Gourmet Soft Pretzel',
        'description': 'served with salt and mustard',
        'price': '$12.99'
    }
];

function populateMenuTab() {
    const content = document.createElement('div');
    const menu = document.createElement('div');
    content.id = 'content';
    menu.id = 'menu';

    body.appendChild(content);
    content.appendChild(menu);

    menuItems.forEach(obj => {
        createNewCard(obj, menu); // Pass content as the parent element
    });
    console.log(menuItems);
}

function createNewCard(obj, parent) {
    const item = document.createElement('div');
    item.classList.add('item');

    const itemName = document.createElement('h3');
    itemName.classList.add('itemName');
    itemName.innerHTML = obj.name;
    item.appendChild(itemName);

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('itemDescription');
    itemDescription.innerHTML = obj.description;
    item.appendChild(itemDescription);

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('itemPrice');
    itemPrice.innerHTML = obj.price;
    item.appendChild(itemPrice);

    parent.appendChild(item); // Append to the specified parent element
}

export { populateMenuTab };