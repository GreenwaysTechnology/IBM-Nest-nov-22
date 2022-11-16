class Account {
    constructor() {
    }
    withdraw() {
        return 100;
    }
}
class SavingsAccount extends Account {
    constructor() {
        super();
        console.log('Savings Account');
    }
    //
    withdraw() {
        return 1000;
    }
}
function main() {
    let sb = new SavingsAccount();
    console.log(sb.withdraw());
}
main();
