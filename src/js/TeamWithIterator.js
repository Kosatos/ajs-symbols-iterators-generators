export default class Team {
  constructor() {
    this.members = new Set();
    this.from = 0;
    this.to = null;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    if (this.from < this.to) {
      return {
        done: false,
        value: this.toArray()[this.from++],
      };
    }

    return {
      done: true,
    };
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`${character?.name} has already been added to the team`);
    }

    this.members.add(character);
    this.to = this.members.size;
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.members.add(character);
      this.to = this.members.size;
    });
  }

  toArray() {
    return [...this.members];
  }
}
