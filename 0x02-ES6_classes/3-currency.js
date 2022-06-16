// Implement a class named Currency:
export default class Currency {
  // - Constructor attributes:

  constructor(symbol, name) {
    // code (String)
    if (typeof symbol !== 'string') {
      throw new Error('symbol must be a string');
    }
    this._symbol = symbol;
    // name (String)
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = name;
  }

  // Implement a getter and setter for each attribute.
  get symbol() {
    return this._symbol;
  }

  set symbol(symbol) {
    if (typeof symbol !== 'string') {
      throw new Error('symbol must be a string');
    }
    this._symbol = symbol;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = name;
  }

  // - Implement a method named displayFullCurrency()
  displayFullCurrency() {
    return `${this._symbol} ${this._name}`;
  }
}

