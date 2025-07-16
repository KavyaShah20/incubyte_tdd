const SweetShop = require('../controllers/sweetShop.controller.js');

describe('SweetShop', () => {
    let shop;

    beforeEach(() => {
        shop = new SweetShop();
    });
    
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
});