/* 通用计算价格接口，双十一和普通计算类实现这个接口 */
interface ICaculatePrice {
    caculate: (order: Order) => void
}

interface Order {
    id: number;
    time: Date;
    price: number;
    /* 运费 */
    freight: number | undefined
}
