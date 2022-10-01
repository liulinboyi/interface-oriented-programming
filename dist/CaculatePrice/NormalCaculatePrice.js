"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalCaculatePrice = void 0;
class NormalCaculatePrice {
    caculate(order) {
        console.log('NormalCaculatePrice');
        if (order.price > 99) {
            order.freight = 0;
        }
        else {
            order.freight = 10;
        }
    }
    ;
}
exports.NormalCaculatePrice = NormalCaculatePrice;
