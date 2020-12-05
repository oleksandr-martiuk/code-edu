class Account {
  setNext(account) {
    this.successor = account
  }

  pay(amountToPay) {
    if (this.canPay(amountToPay)) {
      console.log(`Paid ${amountToPay} using ${this.name}`)
    } else if (this.successor) {
      console.log(`Cannot pay using ${this.name}. Proceeding...`)
      this.successor.pay(amountToPay)
    } else {
      console.log('None of the accounts have enough balance')
    }
  }

  canPay(amount) {
    return this.balance >= amount
  }
}

class Bank extends Account {
  constructor(balance) {
    super()
    this.name = 'bank'
    this.balance = balance
  }
}

class Paypal extends Account {
  constructor(balance) {
    super()
    this.name = 'Paypal'
    this.balance = balance
  }
}

class Bitcoin extends Account {
  constructor(balance) {
    super()
    this.name = 'bitcoin'
    this.balance = balance
  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Сделаем такую цепочку
//      bank->paypal->bitcoin
//
// Приоритет у банка!
// Если банк не может оплатить, переходим к Paypal
// Если Paypal не может, переходим к Bitcoin

const bank = new Bank(100)          // Bank with balance 100
const paypal = new Paypal(200)      // Paypal with balance 200
const bitcoin = new Bitcoin(300)    // Bitcoin with balance 300

bank.setNext(paypal)
paypal.setNext(bitcoin)

// Начнём с банка
bank.pay(259)

// Cannot pay using bank. Proceeding ..
// Cannot pay using paypal. Proceeding ..:
// Paid 259 using Bitcoin!
