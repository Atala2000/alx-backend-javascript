import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be an integer');
    } else {
      this._amount = amount;
    }

    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    this._amount = value;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, coversionRate) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be an integer');
    } else if (typeof coversionRate !== 'number') {
      throw TypeError('Conversion Rate must be a number');
    } else {
      return amount * coversionRate;
    }
  }
}
