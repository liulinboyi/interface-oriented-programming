export class NormalCaculatePrice implements ICaculatePrice {
    caculate(order: Order) {
        console.log('NormalCaculatePrice')
        if (order.price > 99) {
            order.freight = 0
        } else {
            order.freight = 10
        }
    };
}
