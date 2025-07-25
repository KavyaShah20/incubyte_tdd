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

        if (this.sweets.hasOwnProperty(id)) {
            throw new Error('Sweet already exists');
        }


        if (typeof price !== 'number' || isNaN(price)) {
            throw new Error('Price must be a valid number');
        }

        if (quantity < 0) {
            throw new Error('Quantity cannot be negative');
        }

        this.sweets[id] = new Sweet(id, name, category, price, quantity);//new sweet added 
    }

    deleteSweet(id) {
        if (!this.sweets[id]) {
            throw new Error(`Sweet with ID ${id} not found`);
        }

        delete this.sweets[id];
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

    searchSweets({ name, category, minPrice, maxPrice }) {
        return Object.values(this.sweets).filter((sweet) => {
            const nameMatch = !name || sweet.name.toLowerCase().includes(name.toLowerCase());
            const categoryMatch = !category || sweet.category.toLowerCase() === category.toLowerCase();//case insensitive search
            const minPriceMatch = !minPrice || sweet.price >= minPrice;
            const maxPriceMatch = !maxPrice || sweet.price <= maxPrice;

            return nameMatch && categoryMatch && minPriceMatch && maxPriceMatch;
        });
    }

    viewSweets() {
        return Object.values(this.sweets);
    }


    restockSweet(id, quantity) {
        const item = this.sweets[id];

        if (!item) {
            throw new Error('Sweet not found');
        }

        item.quantity += quantity;
    }

}
module.exports = sweetshop;
