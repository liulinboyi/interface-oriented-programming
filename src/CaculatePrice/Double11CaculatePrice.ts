export class Double11CaculatePrice implements ICaculatePrice {
    caculate(order: Order) {
        console.log('Double11CaculatePrice')
        order.freight = 0
    }
}
