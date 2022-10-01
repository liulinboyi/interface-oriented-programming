export class order implements Order {

    id: number
    time: Date
    price: number
    freight: number | undefined

    constructor(id: number, time: Date, price: number) {
        this.id = id
        this.time = time
        this.price = price
    }
}

