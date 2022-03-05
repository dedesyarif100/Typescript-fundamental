"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor() {
        this._cartNum1 = 1;
        this._cartNum2 = 2;
        this._cartNum3 = 3;
    }
    getCartNum() {
        console.log(this._cartNum1, this._cartNum2, this._cartNum3);
    }
}
exports.ShoppingCart = ShoppingCart;
