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
    }

}
module.exports = sweetshop;
