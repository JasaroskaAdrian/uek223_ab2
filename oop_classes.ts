class BankAccount {
    public AccountBalance: number
    public CardNumber: number
    public PinCode: number
    constructor(AccountBalance: number, CardNumber: number, PinCode: number) {
        this.AccountBalance = AccountBalance
        this.CardNumber = CardNumber
        this.PinCode = PinCode
    }
    getDetails(): string {
        return `Card Number: ${this.CardNumber}, Account Balance: ${this.AccountBalance}, Pin Code: ${this.PinCode}`
    }
}
class TransferBalance extends BankAccount {
    constructor(AccountBalance: number, CardNumber: number, PinCode: number) {
        super(AccountBalance, CardNumber, PinCode)
    }
    transfer(check: number) {
        this.AccountBalance += check
        return `Money Transfer successful, Amount: ${check}. New Account Balance: ${this.AccountBalance}`
    }
}
class Withdrawal extends BankAccount {
    constructor(AccountBalance: number, CardNumber: number, PinCode: number) {
        super(AccountBalance, CardNumber, PinCode)
    }
    withdraw(withdrawing: number) {
        if(withdrawing < this.AccountBalance) {
            this.AccountBalance -= withdrawing
            return `Withdrew: ${withdrawing}. New Account Balance: ${this.AccountBalance}`
        } else {
            return `Balance too low, no withdrawal possible`
        } 
        
        
    }
}
const myAccount = new BankAccount(0.1, 5351460180618829, 999)
const transferMoney = new TransferBalance(0.1, 5351460180618829, 999)
const withdrewMoney = new Withdrawal(0.1, 5351460180618829, 999)
console.log(myAccount.getDetails())
console.log(transferMoney.transfer(200))
console.log(withdrewMoney.withdraw(0.01))