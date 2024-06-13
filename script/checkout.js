//spinner
window.addEventListener('load', function() {
    // Hide the spinner after all images have loaded
    document.getElementById('spinner').style.display = 'none';
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Show the spinner as soon as the DOM is ready (before images have finished loading)
    document.getElementById('spinner').style.display = 'block';
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    let year = new Date().getFullYear();
    document.getElementById('footer').innerHTML = 'Copyright &copy; ' + year + ' Jewellery Store by Asanda Mehlo';
  });
  

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


