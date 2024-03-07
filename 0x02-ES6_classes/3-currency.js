export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string' || typeof name !== 'string') {
      throw new TypeError('Value must be string');
    } else {
      this._code = code;
      this._name = name;
    }
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Value must be a string');
    } else {
      this._code = value;
    }
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Value must be a string');
    } else {
      this._name = value;
    }
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
