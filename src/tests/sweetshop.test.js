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

    test('throws error on duplicate sweet ID', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        expect(() => shop.addSweet('1001', 'Other Sweet', 'Candy', 20, 10)).toThrow();
    });

    test('throws error when adding sweet with negative quantity', () => {
        expect(() => shop.addSweet('1001', 'Bad Sweet', 'Candy', 10, -5)).toThrow();
    });

    test('throws error when adding sweet with non-numeric price', () => {
        expect(() => shop.addSweet('1001', 'Odd Sweet', 'Candy', 'ten', 5)).toThrow();
    });


    // Test for deleting a sweet
    test('deletes a sweet', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.deleteSweet('1001');
        expect(shop.sweets['1001']).toBeUndefined();
    });
    test('throws error when deleting non-existent sweet', () => {
        expect(() => shop.deleteSweet('9999')).toThrow('Sweet with ID 9999 not found');
    });
    test('throws error when deleting with null/undefined ID', () => {
        expect(() => shop.deleteSweet(null)).toThrow();
        expect(() => shop.deleteSweet(undefined)).toThrow();
    });


    //Test if after purchasing a sweet, the quantity is reduced
    test('purchase sweet reduces quantity', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.purchaseSweet('1001', 5);
        expect(shop.sweets['1001'].quantity).toBe(15);
    });


    test('search sweets by name', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.addSweet('1002', 'Rasgulla', 'Syrup-Based', 30, 15);
        const results = shop.searchSweets({ name: 'kaju' });
        expect(results.length).toBe(1);
        expect(results[0].name).toBe('Kaju Katli');
    });




    test('search sweets by category', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.addSweet('1002', 'Rasgulla', 'Syrup-Based', 30, 15);
        const results = shop.searchSweets({ category: 'Syrup-Based' });
        expect(results.length).toBe(1);
        expect(results[0].name).toBe('Rasgulla');
    });





    test('search sweets by price range', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.addSweet('1002', 'Rasgulla', 'Syrup-Based', 30, 15);
        shop.addSweet('1003', 'Barfi', 'Nut-Based', 40, 10);
        const results = shop.searchSweets({ minPrice: 35, maxPrice: 50 });
        expect(results.length).toBe(2);
        const names = results.map(s => s.name);
        expect(names).toContain('Kaju Katli');
        expect(names).toContain('Barfi');
    });

    test('sort sweets by price ascending', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.addSweet('1002', 'Rasgulla', 'Syrup-Based', 30, 15);
        shop.addSweet('1003', 'Barfi', 'Nut-Based', 40, 10);
        const sweets = shop.viewSweets().sort((a, b) => a.price - b.price);
        expect(sweets[0].name).toBe('Rasgulla');
        expect(sweets[1].name).toBe('Barfi');
        expect(sweets[2].name).toBe('Kaju Katli');
    });

});