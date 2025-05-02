const cart = [];

function addItem(cart,item,quantity) {
    let newItem = {};
    if (item && quantity && cart.length == 0) {
        newItem = {
            itemName: item,
            amount: quantity
        };
        cart.push(newItem);
        console.log(`${item} x${quantity} added to cart!`);
        if (cart.length == 0) {
        } else {
        }
    } else if (item && quantity && cart.length != 0) {
        newItem = {
            itemName: item,
            amount: quantity
        };
        let cartItem = 0;
        for (thing of cart) {
            if (thing.itemName.toUpperCase() === newItem.itemName.toUpperCase()){
                thing.amount += newItem.amount;
                cartItem += 1;
                console.log(`${item} amount is now ${thing.amount}`);
            } 
        }
        if (cartItem === 0) {
            cart.push(newItem);
            console.log(`${item} x${quantity} added to cart!`);
        } 
    } else {
        console.log('Oops! You must have at least 1 item to add.');
    }
    return cart;
}

function removeItem(cart,item) {
    let itemCount = 0;
    for (crtItem of cart) {
        if (crtItem.itemName == item) {
            itemCount += 1;
            cart.splice(cart.indexOf(crtItem), 1);
            console.log(`${item} removed from the cart!`);
        } 
    }
    if (itemCount === 0){
        console.log(`Oops! There is no ${item} currently in your cart!`);
    } else {
        return cart;
    }
}

function getTotalItems(cart) {
    let totalItems = 0;
    for (item of cart){
        console.log(`${item.amount} x ${item.itemName}`);
        totalItems += item.amount;
    }
    console.log(`---------------
TOTAL ITEMS: ${totalItems}`);
    return totalItems;
}

module.exports = { cart, addItem, removeItem, getTotalItems };