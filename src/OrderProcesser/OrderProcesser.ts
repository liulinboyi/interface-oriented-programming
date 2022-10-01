export class OrderProcesser {

    private _caculate

    constructor(caculate: ICaculatePrice/* 只要实现了接口ICaculatePrice，就可以传入 双十一计算和普通计算就是实现了这个接口 */) {
        this._caculate = caculate
    }

    process(order: Order) {
        this._caculate.caculate(order)
    }
}
