export function createMenuContent() {
    const contentDiv = document.getElementById('content');
    const menuContainer = document.createElement('div');

    menuContainer.classList.add('menu-container');


    const menuItems = {
        Starters: [
            { name: 'Samosa', price: 25 },
            { name: 'Onion Rings', price: 40 },
            { name: 'Chicken Pakoda', price: 50 },
            { name: 'Veg Manchurian', price: 50 },
        ],
        Rotis: [
            { name: 'Roti', price: 20 },
            { name: 'Naan', price: 30 },
            { name: 'Butter Naan', price: 35 },
            { name: 'Garlic Naan', price: 40 },
        ],
        Gravies: [
            { name: 'Butter Chicken', price: 180 },
            { name: 'Dal Makhani', price: 150 },
            { name: 'Palak Paneer', price: 160 },
            { name: 'Aloo Gobi', price: 120 },
        ],
        MainCourse: [
            { name: 'Chicken Biryani', price: 250 },
            { name: 'Mutton Rogan Josh', price: 300 },
            { name: 'Paneer Tikka Masala', price: 220 },
            { name: 'Vegetable Pulao', price: 180 },
        ],
        Chinese: [
            { name: 'Manchow Soup', price: 80 },
            { name: 'Hakka Noodles', price: 120 },
            { name: 'Gobi Manchurian', price: 150 },
            { name: 'Chili Chicken', price: 180 },
        ],
        "Rice/Noodles": [
            { name: 'Jeera Rice', price: 80 },
            { name: 'Fried Rice', price: 100 },
            { name: 'Veg Noodles', price: 120 },
            { name: 'Schezwan Noodles', price: 150 },
        ],
        "pizza/burger": [
            { name: 'Margherita Pizza', price: 200 },
            { name: 'Veg Supreme Pizza', price: 250 },
            { name: 'Chicken Burger', price: 150 },
            { name: 'Veg Burger', price: 120 },
        ],
        "Sweet/Savouries": [
            { name: 'Gulab Jamun', price: 50 },
            { name: 'Rasmalai', price: 60 },
            { name: 'kaju', price: 30 },
            { name: 'Dhokla', price: 70 },
        ],
        "Ice-creams/Juices": [
            { name: 'Mango Ice Cream', price: 70 },
            { name: 'Chocolate Ice Cream', price: 70 },
            { name: 'Orange Juice', price: 50 },
            { name: 'Mixed Fruit Juice', price: 60 },
        ],
    };

    for (const category in menuItems) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('menu-category');

        const categoryHeading = document.createElement('h2');
        categoryHeading.textContent = category;
        categoryDiv.appendChild(categoryHeading);

        const itemsList = document.createElement('div');
        itemsList.classList.add('menu-items');

        menuItems[category].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');

            const itemName = document.createElement('span');
            itemName.textContent = item.name;

            const itemPrice = document.createElement('span');
            itemPrice.classList.add('item-price');
            itemPrice.textContent = `₹${item.price}`;

            itemDiv.appendChild(itemName);
            itemDiv.appendChild(itemPrice);

            itemsList.appendChild(itemDiv);
        });

        categoryDiv.appendChild(itemsList);
        menuContainer.appendChild(categoryDiv);
    }

    contentDiv.appendChild(menuContainer);
}