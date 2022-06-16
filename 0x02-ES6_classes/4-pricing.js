/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import Currency from './3-currency.js'; 

export default class Pricing {
  constructor(amount, currency) {
    // amount (Number)
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    }
    this._amount = amount;
    // currency (Currency)
    if (typeof currency !== 'object') {
      throw new Error('currency must be an object');
    }
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (typeof currency !== 'object') {
      throw new Error('currency must be an object');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // Implement a static method named convertPrice.
  //   It should accept two arguments: amount (Number), conversionRate (Number).
  //  The function should return the amount multiplied by the conversion rate.
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new Error('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
