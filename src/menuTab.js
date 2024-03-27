const body = document.querySelector('body');

let menuItems = [
    {
        'name': 'Pizza',
        'description': 'cheese, and pepperoni',
        'price': '$4.99'
    },
    {
        'name': 'Pizza',
        'description': 'cheese, and pepperoni',
        'price': '$4.99'
    },
    {
        'name': 'Pizza',
        'description': 'cheese, and pepperoni',
        'price': '$4.99'
    }
];

function populateMenuTab() {
    const content = document.createElement('div');
    content.id = 'content';

    body.appendChild(content);

    menuItems.forEach(obj => {
        createNewCard(obj, content); // Pass content as the parent element
    });
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