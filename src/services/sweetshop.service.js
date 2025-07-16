const Sweet = require('../models/sweet.model.js');

class sweetshop {
    constructor() {
        this.sweets = {};
    }

    addSweet(id, name, category, price, quantity) {
        //check if required fields are provided
        if (!id || !name || !category) {
            throw new Error('Id, name, and category are required');
        }

        this.sweets[id] = new Sweet(id, name, category, price, quantity);//new sweet added 
    }

    deleteSweet(id) {
        if (!this.sweets[id]) {
            throw new Error(`Sweet with ID ${id} not found`);
        }

        delete this.sweets[id];//delete sweet by id
    }

    purchaseSweet(id, quantity) {
        const item = this.sweets[id];

        if (!item) {
            throw new Error('Sweet not found');
        }

        if (quantity < 0 || item.quantity < quantity) {
            throw new Error('Insufficient stock');
        }

        item.quantity -= quantity;
    }
}
module.exports = sweetshop;
