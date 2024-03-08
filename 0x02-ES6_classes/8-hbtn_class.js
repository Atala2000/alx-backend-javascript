export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a valid number');
    }
    this._size = size;

    if (typeof location !== 'string') {
      throw new TypeError('Location must be a valid string');
    }

    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  set size(value) {
    this._size = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }

    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
