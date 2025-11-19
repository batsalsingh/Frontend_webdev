// BankAccount with private balance field
class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    if (typeof initialBalance !== 'number' || initialBalance < 0) {
      throw new Error('Initial balance must be a non-negative number.');
    }
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Deposit amount must be a positive number.');
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Withdrawal amount must be a positive number.');
    }
    if (amount > this.#balance) {
      throw new Error('Insufficient balance.');
    }
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

// Demonstration
const account = new BankAccount(1000); // valid initial balance

console.log('Initial Balance: ₹' + account.getBalance());

// Valid deposits
try {
  account.deposit(500);
  console.log('After depositing ₹500: ₹' + account.getBalance());

  account.deposit(250.75);
  console.log('After depositing ₹250.75: ₹' + account.getBalance());
} catch (err) {
  console.error('Deposit Error:', err.message);
}

// Valid withdrawal
try {
  account.withdraw(300);
  console.log('After withdrawing ₹300: ₹' + account.getBalance());
} catch (err) {
  console.error('Withdrawal Error:', err.message);
}

// Invalid withdrawals (handled with try/catch)
try {
  account.withdraw(2000); // more than balance → should throw
} catch (err) {
  console.error('Invalid Withdrawal:', err.message);
}

try {
  account.withdraw(-50); // invalid amount → should throw
} catch (err) {
  console.error('Invalid Withdrawal:', err.message);
}

// Final balance
console.log('Final Balance: ₹' + account.getBalance());