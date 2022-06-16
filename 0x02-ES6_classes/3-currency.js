// Implement a class named Currency:
export default class Currency {
  // - Constructor attributes:

  constructor(code, name) {
    // code (String)
    if (typeof code !== 'string') {
      throw new Error('code must be a string');
    }
    this._code = code;
    // name (String)
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = name;
  }

  // Implement a getter and setter for each attribute.
  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new Error('code must be a string');
    }
    this._code = code;
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
    return `${this._name} (${this._code})`;
  }
}
