export default class Team {
  constructor() {
    this.members = new Set();
  }

  * generator() {
    for (let i = 0; i < this.members.size; i++) {
      yield this.toArray()[i];
    }
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`${character?.name} has already been added to the team`);
    }

    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.members.add(character);
    });
  }

  toArray() {
    return [...this.members];
  }
}
