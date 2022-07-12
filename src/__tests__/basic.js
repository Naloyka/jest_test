import { calculateTotal } from "../calculate.js"

test("basic test", () => {
    let result = 4;
    expect(result).toBe(4)
})

test("calculator sum", () => {
    const list = [
        {
            id: 443,
            name: "Война и мир",
            count: 1,
            price: 500
        },
        {
            id: 943,
            name: "Собачье сердце",
            count: 1,
            price: 500
        }
    ]

    const result = calculateTotal(list)
    expect(result).toBe(1000)
})