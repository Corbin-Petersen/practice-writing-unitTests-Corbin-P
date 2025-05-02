const crt = require('../cart');

describe("testing addItem function", () => {
    test("must create a new item successfully", () => {
        expect(crt.addItem(crt.cart, "Binoculars", 1)).toEqual(expect.arrayContaining([{'itemName': 'Binoculars', 'amount': 1}]));
    });
    test("adding two different products w/ one product already in the cart", () => {
        expect(crt.addItem(crt.cart, "Binoculars", 1)).toEqual(expect.arrayContaining([{'itemName': 'Binoculars', 'amount': 2}]));
        expect(crt.addItem(crt.cart, "Car", 1)).toEqual(expect.arrayContaining([{'itemName': 'Car', 'amount': 1}]));
    });
});

describe("testing removeItem function", () => {
    test("removing a specific item from the itemName", () => {
        expect(crt.removeItem(crt.cart, "Car")).toEqual(expect.not.arrayContaining([{'itemName': 'Car', 'amount': 1}]));
    });
    test("trying to remove something not in the cart", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const testMessage = 'Oops! There is no Behemoth currently in your cart!';
        crt.removeItem(crt.cart, "Behemoth");
        expect(consoleSpy).toHaveBeenCalledWith(testMessage);
        consoleSpy.mockRestore();
    });
});

describe("testing getTotalItems function", () => {
    test("", () => {
        expect(crt.getTotalItems(crt.cart)).toEqual(2);
    });
});