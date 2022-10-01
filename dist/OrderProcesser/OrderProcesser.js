"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProcesser = void 0;
class OrderProcesser {
    constructor(caculate /* 只要实现了接口ICaculatePrice，就可以传入 双十一计算和普通计算就是实现了这个接口 */) {
        this._caculate = caculate;
    }
    process(order) {
        this._caculate.caculate(order);
    }
}
exports.OrderProcesser = OrderProcesser;
