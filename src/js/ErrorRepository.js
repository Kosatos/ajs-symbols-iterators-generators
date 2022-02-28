export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [111, 'Error 111'],
      [222, 'Error 222'],
      [333, 'Error 333'],
    ]);
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
  }
}
