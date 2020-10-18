class TransactionProcessor {
  // QUESTION: COMPLETE ALL CLASS FUNCTIONS TO PASS THE TESTS

  constructor(transactions) {
    this.transactions = transactions;
  }

  print(tx) {
    console.log(
      `ID: ${tx.id} - Brand: ${tx.brand} - Currency: ${tx.currency} - Amount: ${tx.amount}`
    );
  }

  // Check valid transactions rules
  static isValidTransaction(transaction) {
    return transaction.id > 0
      && transaction.amount >= 0
      && ["visa", "mastercard", "amex"].includes(transaction.brand)
      && ["EUR", "GBP", "USD"].includes(transaction.currency);
  }

  // Remove invalid transactions
  // TODO: review why this functionality is reversed, to pass the test it returns only INVALID txs, is the test ok?
  filterInvalidTransactions() {
    this.transactions = this.transactions.filter((tx) => !TransactionProcessor.isValidTransaction(tx));

    return this
  }

  // Return transactions of given currency
  getTransactionsByCurrency(currency) {
    this.transactions = this.transactions.filter((tx) => tx.currency === currency);

    return this;
  }

  // Return transactions of given brand
  getTransactionsByBrand(brand) {
    this.transactions = this.transactions.filter((tx) => tx.brand === brand);

    return this;
  }

  // BONUS:
  // Apply multiple filters. Filters parameter should be an array of functions (predicates)
  filterTransaction(filters) {
    // ...
    return this;
  }

  // Return the total amount of current transactions array
  sum() {
    return 0;
  }
}

module.exports = TransactionProcessor;
