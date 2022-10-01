"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Double11CaculatePrice_1 = require("./CaculatePrice/Double11CaculatePrice");
const NormalCaculatePrice_1 = require("./CaculatePrice/NormalCaculatePrice");
const OrderProcesser_1 = require("./OrderProcesser/OrderProcesser");
const Order_1 = require("./Order/Order");
function Main() {
    const cOrder = new Order_1.order(22, new Date(), 90);
    const double11 = new Double11CaculatePrice_1.Double11CaculatePrice();
    const normal = new NormalCaculatePrice_1.NormalCaculatePrice();
    // Double11CaculatePrice与NormalCaculatePrice实现了ICaculatePrice接口
    // 自己计算运费逻辑各自类，各自实现，只要实现了ICaculatePrice接口，有这个方法
    // 就行
    // 这就是面向接口编程
    const orderProcess = new OrderProcesser_1.OrderProcesser(normal);
    orderProcess.process(cOrder);
    console.log(cOrder);
}
Main();
