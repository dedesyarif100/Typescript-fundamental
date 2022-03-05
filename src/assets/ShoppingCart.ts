export class ShoppingCart {
    private _cartNum1: number;
    private _cartNum2: number;
    private _cartNum3: number;
 
    constructor(){
       this._cartNum1 = 1;
       this._cartNum2 = 2;
       this._cartNum3 = 3;
    }
 
    getCartNum(){
        console.log(this._cartNum1, this._cartNum2, this._cartNum3);
    }
}