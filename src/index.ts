import { Double11CaculatePrice } from "./CaculatePrice/Double11CaculatePrice";
import { NormalCaculatePrice } from "./CaculatePrice/NormalCaculatePrice";
import { OrderProcesser } from "./OrderProcesser/OrderProcesser";
import { order } from "./Order/Order";

function Main() {
    const cOrder = new order(22, new Date(), 90)

    const double11 = new Double11CaculatePrice()
    const normal = new NormalCaculatePrice()

    // Double11CaculatePrice与NormalCaculatePrice实现了ICaculatePrice接口
    // 自己计算运费逻辑各自类，各自实现，只要实现了ICaculatePrice接口，有这个方法
    // 就行
    // 这就是面向接口编程

    const orderProcess = new OrderProcesser(normal)

    orderProcess.process(cOrder)
    console.log(cOrder)
}

Main()
