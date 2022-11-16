interface WithDraw {
    withdraw(): number
}
interface Deposit {
    deposit(amount: number): number
}
class SavingsAccount implements WithDraw, Deposit {
    constructor() {

    }
    withdraw(): number {
        return 1000
    }
    deposit(amount: number): number {
        return amount
    }
}
function main() {
    let sb = new SavingsAccount()
    console.log(sb.withdraw(), sb.deposit(12));

}
main()