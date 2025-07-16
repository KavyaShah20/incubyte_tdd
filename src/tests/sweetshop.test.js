const SweetShop = require('../services/sweetshop.service.js');

describe('SweetShop', () => {
    let shop;

    beforeEach(() => {
        shop = new SweetShop();
    });
    
    // Test for missing required fields
    test('throws error if required fields are missing', () => {
        expect(() => {
            shop.addSweet(null, 'Kaju Katli', 'Nut-Based', 15, 10);
        }).toThrow('Id, name, and category are required');

        expect(() => {
            shop.addSweet('1', null, 'Nut-Based', 15, 10);
        }).toThrow('Id, name, and category are required');

        expect(() => {
            shop.addSweet('1', 'Kaju Katli', null, 15, 10);
        }).toThrow('Id, name, and category are required');
    });

    // Test for adding a sweet
    test('adds a sweet', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        expect(shop.sweets['1001'].name).toBe('Kaju Katli');
    });

    // Test for deleting a sweet
    test('deletes a sweet', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.deleteSweet('1001');
        expect(shop.sweets['1001']).toBeUndefined();
    });

    //Test if after purchasing a sweet, the quantity is reduced
    test('purchase sweet reduces quantity', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.purchaseSweet('1001', 5);
        expect(shop.sweets['1001'].quantity).toBe(15);
    });

});