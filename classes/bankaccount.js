class BankAccount {
    // ownerName: 'Usman',
    // balance: 1000000,
    // acctNum: 485687932
    constructor(accName, balance) {
      this.accName = accName;
      this.balance = balance;
      this.acctNum = Math.floor(Math.random() * 1000)
    } 
  
    deposit(depositedAmount) {
      this.balance += depositedAmount
      console.log('current balance after depositing ' + depositedAmount + " is: " + this.balance)
    }
  
    withdraw(withdrawnAmount) {
      this.balance -= withdrawnAmount
      console.log('current balance after withdrawing ' + withdrawnAmount + " is: " + this.balance)
    }
  
  }
  
  class CheckingAccount extends BankAccount {
    constructor(accName, balance, overdraftEnabled = true) {
      super(accName, balance) // calls the constructor from parent class (Bank Account)
      this.overdraftEnabled = overdraftEnabled;
    }
  
    withdraw(amount) { 
      if (amount > this.balance) {
  
        if (this.overdraftEnabled) {
  
          let overdraftFee = 20
          this.balance -= (amount + overdraftFee)
          console.log('this transaction overdrafts your balance :(')
  
        } else {
          console.log('you cannot withdraw more than you have')
        }
  
      } else {
        this.balance -= amount
        console.log('current balance after withdrawing ' + amount + " is: " + this.balance)
      }
    }
  }
  
  class SavingsAccount extends BankAccount {
    withdraw() {
      console.log('you cannot withdraw from this savings account :(')
    }
  }
  
  
  const lucas = new BankAccount('Lucas', 1000000)
  const usman = new CheckingAccount('Usman', 1000000)
  const stephin = new SavingsAccount('Stephin', 5)
  
  console.log(lucas)
   console.log(usman)
   console.log(stephin)
  
  lucas.withdraw(1000)
  usman.withdraw(2000000)
  stephin.withdraw(4) 
  