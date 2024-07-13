let cartItems = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    total += itemPrice;

    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart-items');
    cartElement.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartElement.appendChild(li);
    });
    document.getElementById('cart-total').textContent = total.toFixed(2);
    
}

function checkout() {
    // Simulate checkout process (in real-world, would connect to backend)
    alert(`Total amount to pay: $${total.toFixed(3)}`);
    cartItems = [];
    total = 0;
    updateCart();






    const webhookURL = 'https://discordapp.com/api/webhooks/1261613962420686880/t1dVMRQt2qnOf2I4UJ_O0j-YQii0nOXXRf8M5sf63E_tY7jKdwinHf2pnvwU4-zVDxioL'; // Replace with your webhook URL

    const orderDetails = {
        content: `New Order Received! \nProduct: ${item.name}\nQuantity: ${item.price}\nTotal: $${total.toFixed(3)}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Order sent to Discord!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send order to Discord.');
    });
}
