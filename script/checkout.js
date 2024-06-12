let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems'))

let x = [purchasedItems]

let cart = document.querySelector('#cart')

function displayData(purchasedItems){
    let table = `
        <table class="table" style="border: none">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
    `;

    purchasedItems.forEach((item, index) =>{
        table += `
            <tr>
                <td><img src="${item.image}" style="width: 5%; height:5%;"> ${item.name}</td>
                <td>
                    <button class="decrease">-</button>
                    ${item.quantity}
                    <button class="increase">+</button>
                </td>
                <td>${item.price.toFixed(2)}</td>
            </tr>
        `;
    });

    table += `</tbody></table>`;

    cart.innerHTML = table;

    // Add event listeners to increase and decrease buttons
    let increaseButtons = document.querySelectorAll('.increase');
    let decreaseButtons = document.querySelectorAll('.decrease');

    increaseButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            let index = e.target.dataset.index;
            if (purchasedItems[index].quantity !== undefined) {
                purchasedItems[index].quantity += 1;
                updateLocalStorage();
                displayData(purchasedItems);
            } else {
                console.error(`Item at index ${index} does not have a quantity`);
            }
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            let index = e.target.dataset.index;
            if (purchasedItems[index].quantity !== undefined) {
                if (purchasedItems[index].quantity > 1) {
                    purchasedItems[index].quantity -= 1;
                } else {
                    // Optional: Remove the item if quantity is 1 and decrease is clicked
                    purchasedItems.splice(index, 1);
                }
                updateLocalStorage();
                displayData(purchasedItems);
            } else {
                console.error(`Item at index ${index} does not have a quantity`);
            }
        });
    });
}

function updateLocalStorage() {
    localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
}


displayData(purchasedItems)
