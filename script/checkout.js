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


}

// function updateLocalStorage() {
// }
localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));


displayData(purchasedItems)


