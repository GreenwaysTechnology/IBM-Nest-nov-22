class SavingsAccount {
    constructor() {
    }
    withdraw() {
        return 1000;
    }
    deposit(amount) {
        return amount;
    }
}
function main() {
    let sb = new SavingsAccount();
    console.log(sb.withdraw(), sb.deposit(12));
}
main();
